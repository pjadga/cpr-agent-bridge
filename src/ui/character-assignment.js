import { MODULE_ID } from '../constants.js';
import { truncateAgentLink } from '../utils.js';
import { showPairingQr } from './qr-link.js';

// ==================================================================
// CUSTOM GM MENU: CHARACTER ASSIGNMENT
// ==================================================================

export class CharacterAssignmentMenu extends FormApplication {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: 'cpr-agent-assignment-menu',
            title: 'Agent Character Assignment',
            width: 500,
            classes: ["form"]
        });
    }

    async _renderInner(data) {
        let html = `
        <div>
        <p>Assign a character to each player. A key/QR link is only needed for the
        hosted (remote) Agent; the embedded in-Foundry Agent just uses the
        character assigned here, so assignment works with or without a key.</p>
        <table style="width: 100%; text-align: left; margin-bottom: 10px;">
        <tr>
        <th>Player</th>
        <th>API Status</th>
        <th>Agent Link</th>
        <th>Assigned Character</th>
        <th style="width: 80px;"></th>
        </tr>`;

        for (let u of data.users) {
            const truncatedLink = truncateAgentLink(u.agentLink);
            html += `<tr><td style="padding: 5px 0;"><strong>${u.name}</strong></td>`;

            // API status + agent link are informational only. Assignment below is
            // always available because the embedded Agent needs no key.
            if (u.hasKey) {
                html += `<td style="color: #00ff00;">✔ Linked</td>`;
                html += `<td><small><code title="${u.agentLink || ''}">${truncatedLink || 'Pending...'}</code></small></td>`;
            } else {
                html += `<td style="color: #ffaa00;" title="No remote key; the embedded Agent still works.">◐ Local only</td>`;
                html += `<td><small>-</small></td>`;
            }

            html += `<td><select class="character-select" data-userid="${u.id}" style="width: 100%;">
            <option value="">- None -</option>`;
            for (let c of data.characters) {
                const selected = c.id === u.characterId ? 'selected' : '';
                html += `<option value="${c.id}" ${selected}>${c.name}</option>`;
            }
            html += `</select></td>`;
            html += `<td><button type="button" class="show-qr" data-userid="${u.id}" data-username="${u.name}" title="Show pairing QR"><i class="fas fa-qrcode"></i></button> <button type="button" class="refresh-user" data-userid="${u.id}" title="Refresh user details"><i class="fas fa-sync-alt"></i></button></td>`;
            html += `</tr>`;
        }

        html += `</table>
        <div style="display: flex; gap: 10px; margin-top: 10px;">
        <button type="button" id="save-agent-assignments"><i class="fas fa-save"></i> Save Assignments</button>
        <button type="button" id="refresh-all-users"><i class="fas fa-sync-alt"></i> Refresh All Users</button>
        </div>
        </div>`;
        return $(html);
    }

    getData() {
        const users = game.users.map(u => ({
            id: u.id,
            name: u.name,
            isGM: u.isGM,
            hasKey: !!u.getFlag(MODULE_ID, 'hasApiKey'),
            agentLink: u.getFlag(MODULE_ID, 'agent-link'),
            characterId: u.character?.id || ""
        }));

        const characters = game.actors.filter(a => a.type === 'character').map(a => ({
            id: a.id,
            name: a.name
        }));

        return { users, characters };
    }

    // This forces Foundry to listen to our specific button click
    activateListeners(html) {
        super.activateListeners(html);

        html.find('#save-agent-assignments').click(async (event) => {
            event.preventDefault(); // Stop any browser funny business

            let updatedCount = 0;
            const updates = [];

            // Rip the values directly from the dropdowns
            html.find('.character-select').each((index, element) => {
                const userId = element.dataset.userid;
                const actorId = element.value;
                const user = game.users.get(userId);

                if (user) {
                    const newCharId = (actorId === "" || actorId === "null") ? null : actorId;
                    const currentCharId = user.character?.id || null;

                    if (currentCharId !== newCharId) {
                        updates.push({ _id: user.id, character: newCharId });
                        updatedCount++;
                    }
                }
            });

            // Save to DB and alert the GM
            if (updates.length > 0) {
                await User.updateDocuments(updates);
                ui.notifications.info(`Cyberpunk Bridge: Updated ${updatedCount} player assignments!`);

                // Sync each change to Laravel so it knows immediately
                for (let update of updates) {
                    const user = game.users.get(update._id);
                    const agentLink = user?.getFlag(MODULE_ID, 'agent-link');

                    await window.cyberpunkBridge.sendResponse({
                        type: 'GM_LINK_PLAYER_CHARACTER',
                        agentLink: agentLink || update._id, // Use agent-link as primary ID for Laravel
                        actorId: update.character,
                        character: update.character,
                        isGM: user.isGM
                    });
                }

                // Trigger a sync for the GM in case they updated themselves
                window.cyberpunkBridge.syncPlayerLink();
            } else {
                ui.notifications.info(`Cyberpunk Bridge: No assignment changes made.`);
            }

            this.close(); // Close the window manually after saving
        });

        // Show a pairing QR for a player to scan with the Agent app.
        html.find('.show-qr').click(async (event) => {
            event.preventDefault();
            const userId = event.currentTarget.dataset.userid;
            const userName = event.currentTarget.dataset.username;
            await showPairingQr(window.cyberpunkBridge, userId, userName);
        });

        // Handle individual user refresh
        html.find('.refresh-user').click(async (event) => {
            event.preventDefault();
            const userId = event.currentTarget.dataset.userid;
            const user = game.users.get(userId);

            if (user) {
                // Clear the agent-link flag so it can be re-synced
                await user.unsetFlag(MODULE_ID, 'agent-link');
                await user.unsetFlag(MODULE_ID, 'hasApiKey');

                ui.notifications.info(`Cyberpunk Bridge: Cleared cached data for ${user.name}. They will need to re-sync.`);
                this.render(true); // Re-render the menu to show updated state
            }
        });

        // Handle refresh all users
        html.find('#refresh-all-users').click(async (event) => {
            event.preventDefault();

            for (let user of game.users) {
                await user.unsetFlag(MODULE_ID, 'agent-link');
                await user.unsetFlag(MODULE_ID, 'hasApiKey');
            }

            ui.notifications.info(`Cyberpunk Bridge: Cleared cached data for all users. They will need to re-sync.`);
            this.render(true); // Re-render the menu to show updated state
        });
    }
}