export class DataPoolPageSheet extends JournalPageSheet {

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["sheet", "journal-sheet", "data-pool-sheet"],
            width: 700,
            height: 800,
            submitOnChange: true, // Auto-saves when inputs lose focus
            closeOnSubmit: false
        });
    }

    get template() {
        return `modules/cpr-agent/templates/data-pool.hbs`;
    }

    async getData(options) {
        const context = super.getData(options);
        // Expose the entries to the handlebars template
        context.entries = this.document.system.entries || [];

        // Enrich HTML for the rich text editors so links and secrets work
        for (let entry of context.entries) {
            if (entry.type === 'html') {
                entry.enrichedHtml = await TextEditor.enrichHTML(entry.htmlContent, {
                    async: true,
                    secrets: this.document.isOwner,
                    documents: true
                });
            }
        }
        return context;
    }

    activateListeners(html) {
        super.activateListeners(html);

        // Handle adding a new row
        html.find('.add-entry').click(this._onAddEntry.bind(this));

        // Handle deleting a row
        html.find('.delete-entry').click(this._onDeleteEntry.bind(this));
    }

    async _onAddEntry(event) {
        event.preventDefault();
        const currentEntries = this.document.system.entries || [];
        const newEntries = [...currentEntries, {
            id: foundry.utils.randomID(),
            title: "New Data Pool Link",
            type: "html"
        }];
        await this.document.update({ "system.entries": newEntries });
    }

    async _onDeleteEntry(event) {
        event.preventDefault();
        const entryId = event.currentTarget.dataset.id;
        const currentEntries = this.document.system.entries || [];
        const newEntries = currentEntries.filter(e => e.id !== entryId);
        await this.document.update({ "system.entries": newEntries });
    }
}