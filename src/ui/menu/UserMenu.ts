import { ClosableFloatingDomNode, Position } from "@hanul/skynode";
import MenuBuilder from "./MenuBuilder";
import usermenu from "./usermenu.json";

export default class UserMenu extends ClosableFloatingDomNode {

    constructor(position: Position) {
        super(position, ".user-menu");
        this.append(
            ...MenuBuilder.build(usermenu.menu),
        );
        this.onDom("click", () => this.delete());
    }
}
