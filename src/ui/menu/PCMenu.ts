import { DomNode } from "@hanul/skynode";
import menu from "./menu.json";
import MenuBuilder from "./MenuBuilder";

export default class PCMenu extends DomNode {

    constructor() {
        super(".pc-menu");
        this.append(
            ...MenuBuilder.build(menu.menu),
        );
    }
}
