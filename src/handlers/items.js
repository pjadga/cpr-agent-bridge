// Handlers for item interactions: CONSUME_ITEM, ITEM_EQUIP, RELOAD_WEAPON.

export async function consumeItem(bridge, data, { type, requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (!actor) {
        console.warn(`Actor ID ${actorId} not found in this world.`);
        return;
    }
    const item = actor.items.get(data.itemId);
    if (!item) {
        console.warn(`Item ID ${data.itemId} not found on actor ${actor.name}.`);
        return;
    }
    await item.snort();
    ui.notifications.info(`Sync: ${item.name} consumed.`);
    await bridge.sendResponse({ type: 'CONFIRMATION', action: type, actorId: actorId, success: true, requestId });
}

export async function itemEquip(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (actor) {
        const item = actor.items.get(data.itemId);
        if (item) {
            const path = `items.${data.itemId}.system.equipped`;
            await item.update({ 'system.equipped': data.state });
            await bridge.sendResponse({ type: 'SHEET_DELTA', actorId: actorId, delta: { [path]: data.state }, success: true, requestId });
        }
    }
}

export async function reloadWeapon(bridge, data, { requestId, actorId }) {
    const actor = game.actors.get(actorId);
    if (actor) {
        const weapon = actor.items.get(data.weaponId);
        const selectedAmmo = data.ammoId ? actor.items.get(data.ammoId) : null;

        const performReload = async () => {
            await weapon.reload();

            // Send delta for weapon and potentially ammo
            const delta = {
                [`items.${data.weaponId}.system.magazine`]: {
                    value: weapon.system.magazine.value,
                    max: weapon.system.magazine.max
                },
                [`items.${data.weaponId}.system.installedItems`]: {
                    list: [...weapon.system.installedItems.list],
                    slots: weapon.system.installedItems.slots,
                    usedSlots: weapon.system.installedItems.usedSlots
                }
            };

            // If we have specific ammo being tracked, update it too
            if (selectedAmmo) {
                delta[`items.${selectedAmmo.id}.system.amount`] = selectedAmmo.system.amount;
            }

            // Get current ammo list to ensure any uninstalled ammo is also updated
            const actorItems = actor.items;
            actorItems.filter(i => i.type === 'ammo').forEach(i => {
                delta[`items.${i.id}.system.amount`] = i.system.amount;
            });

            // Also update any other ammo that might have been changed/uninstalled
            // Since we don't know which one was uninstalled easily without more logic,
            // we can either refresh all items or just let standard delta handle it.
            // But for now, ensuring weapon.magazine and weapon.installedItems is a good start.

            await bridge.sendResponse({ type: 'SHEET_DELTA', actorId: actorId, delta, success: true, requestId });
        };

        if (selectedAmmo) {
            let currentAmmo = weapon.getInstalledItems('ammo');
            if (currentAmmo && currentAmmo.length > 0) {
                weapon.uninstallItems(currentAmmo);
            }
            setTimeout(function() {
                weapon.installItems([selectedAmmo]);
            }, 500);
            setTimeout(async () => {
                await performReload();
            }, 1500);
        } else {
            await performReload();
        }
    }
}
