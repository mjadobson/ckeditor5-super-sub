import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import AttributeCommand from "./attributecommand";

const SUPER = "super";
const SUB = "sub";

export class SuperEditing extends Plugin {
  init() {
    const editor = this.editor;

    editor.model.schema.extend("$text", { allowAttributes: SUPER });

    editor.conversion.attributeToElement({
      model: SUPER,
      view: "sup",
      upcastAlso: [
        {
          styles: {
            "vertical-align": "super"
          }
        }
      ]
    });

    editor.commands.add(SUPER, new AttributeCommand(editor, SUPER));
  }
}

export class SubEditing extends Plugin {
  init() {
    const editor = this.editor;

    editor.model.schema.extend("$text", { allowAttributes: SUB });

    editor.conversion.attributeToElement({
      model: SUB,
      view: "sub",
      upcastAlso: [
        {
          styles: {
            "vertical-align": "SUb"
          }
        }
      ]
    });

    editor.commands.add(SUB, new AttributeCommand(editor, SUB));
  }
}
