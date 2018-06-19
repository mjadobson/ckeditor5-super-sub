import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import { SuperEditing, SubEditing } from "./editing";
import { SuperUI, SubUI } from "./ui";

export default class SuperSub extends Plugin {
  static get requires() {
    return [SuperEditing, SuperUI, SubEditing, SubUI];
  }

  static get pluginName() {
    return "SuperSub";
  }
}
