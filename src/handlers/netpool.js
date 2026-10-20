// Handler for GET_NET_POOL — reads custom "Agent Data Pool" journal pages.

// Who is this request for? A player's own client is that player. A GM's client
// answers on behalf of players, so resolve the non-GM owners of the actor.
// No player owner found (GM's own character, no actor) means the GM view: see everything.
function resolveViewers(actorId) {
    if (!game.user.isGM) return [game.user];
    const actor = actorId ? game.actors.get(actorId) : null;
    if (!actor) return [];
    return game.users.filter(u => !u.isGM && actor.testUserPermission(u, "OWNER"));
}

export async function getNetPool(bridge, data, { requestId, actorId, debug }) {
    const dataPools = [];
    const viewers = resolveViewers(actorId);
    const canSee = (doc) => viewers.length === 0
        || viewers.some(u => doc.testUserPermission(u, "OBSERVER"));

    // Loop through all journal entries in the world
    for (const journal of game.journal) {

        // Filter for our custom Data Pool pages
        // Respect Foundry's own visibility: hidden journals/pages are not sent
        const poolPages = journal.pages.filter(p => p.type === "cpr-agent.datapool"
            && canSee(journal) && canSee(p));

        for (const page of poolPages) {
            // Rows flagged "hidden from Agent" are never sent
            const rawEntries = (page.system.entries || []).filter(e => !e.hidden);
            if (rawEntries.length === 0) continue;
            const processedEntries = [];

            // Process and enrich the entries
            for (const entry of rawEntries) {
                let content = entry.htmlContent;

                // If it's HTML, resolve Foundry's internal @UUID and @Roll links into standard HTML
                if (entry.type === 'html' && content) {
                    content = await TextEditor.enrichHTML(content, { async: true });
                }

                processedEntries.push({
                    id: entry.id,
                    icon: entry.icon,
                    title: entry.title,
                    type: entry.type,
                    htmlContent: content,
                    pdfPath: entry.pdfPath
                });
            }

            dataPools.push({
                journalId: journal.id,
                journalName: journal.name,
                pageId: page.id,
                pageName: page.name,
                entries: processedEntries
            });
        }
    }

    if (debug) console.log("[Bridge] Found Data Pools:", dataPools);

    // Send the payload back to Laravel
    await bridge.sendResponse({
        type: 'NET_POOL_DATA',
        actorId: actorId,
        pools: dataPools,
        requestId: requestId,
        success: true
    });
}
