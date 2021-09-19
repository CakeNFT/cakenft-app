import { BodyNode, DomNode, el } from "@hanul/skynode";
import menu from "./menu.json";
import MenuBuilder from "./MenuBuilder";
import UserMenu from "./UserMenu";

export default class PCMenu extends DomNode {

    constructor() {
        super(".pc-menu");
        this.append(
            ...MenuBuilder.build(menu.menu),
            el("a.user", {
                click: (event, button) => {
                    const rect = button.rect;
                    new UserMenu({ left: rect.right - 200, top: rect.top + 36 }).appendTo(BodyNode);
                },
            }),
        );
    }
}
