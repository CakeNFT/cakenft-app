import { ClosableFloatingDomNode, Position } from "@hanul/skynode";
import menu from "./menu.json";
import usermenu from "./usermenu.json";
import MenuBuilder from "./MenuBuilder";

export default class MobileMenu extends ClosableFloatingDomNode {

    constructor(position: Position) {
        super(position, ".mobile-menu");
        this.append(
            ...MenuBuilder.build(menu.menu),
            ...MenuBuilder.build(usermenu.menu),
        );
        this.onDom("click", () => this.delete());
    }
}
