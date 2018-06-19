import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";

import superIcon from "./super.svg";
import subIcon from "./sub.svg";

const SUPER = "super";
const SUB = "sub";

export class SuperUI extends Plugin {
  init() {
    const editor = this.editor;
    const t = editor.t;

    editor.ui.componentFactory.add(SUPER, locale => {
      const command = editor.commands.get(SUPER);
      const view = new ButtonView(locale);

      view.set({
        label: t("Superscript"),
        icon: superIcon,
        tooltip: true
      });

      view.bind("isOn", "isEnabled").to(command, "value", "isEnabled");

      this.listenTo(view, "execute", () => editor.execute(SUPER));

      return view;
    });
  }
}

export class SubUI extends Plugin {
  init() {
    const editor = this.editor;
    const t = editor.t;

    editor.ui.componentFactory.add(SUB, locale => {
      const command = editor.commands.get(SUB);
      const view = new ButtonView(locale);

      view.set({
        label: t("Subscript"),
        icon: subIcon,
        tooltip: true
      });

      view.bind("isOn", "isEnabled").to(command, "value", "isEnabled");

      this.listenTo(view, "execute", () => editor.execute(SUB));

      return view;
    });
  }
}
