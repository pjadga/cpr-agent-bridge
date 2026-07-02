// Handler for GET_NET_POOL — reads custom "Agent Data Pool" journal pages.

export async function getNetPool(bridge, data, { requestId, actorId, debug }) {
    const dataPools = [];

    // Loop through all journal entries in the world
    for (const journal of game.journal) {

        // Filter for our custom Data Pool pages
        const poolPages = journal.pages.filter(p => p.type === "cpr-agent.datapool");

        for (const page of poolPages) {
            const rawEntries = page.system.entries || [];
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
