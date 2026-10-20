export class DataPoolPageModel extends foundry.abstract.TypeDataModel {
    static metadata = {
        label: "Agent Data Pool"
    };

    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            // An array of dynamic rows
            entries: new fields.ArrayField(new fields.SchemaField({
                id: new fields.StringField({ required: true, initial: () => foundry.utils.randomID() }),
                icon: new fields.FilePathField({ categories: ["IMAGE"], initial: "icons/svg/item-bag.svg" }),
                title: new fields.StringField({ required: true, initial: "Link Title" }),
                hidden: new fields.BooleanField({ initial: false }),
                type: new fields.StringField({ choices: ["html", "pdf"], initial: "html" }),
                htmlContent: new fields.HTMLField(),
                pdfPath: new fields.FilePathField({ categories: ["TEXT"] })
            }))
        };
    }
}