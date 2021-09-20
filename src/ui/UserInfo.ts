import { BodyNode, DomNode, el } from "@hanul/skynode";
import UserMenu from "./menu/UserMenu";

export default class UserInfo extends DomNode {

    constructor() {
        super(".user-info");
        /*this.append(
            el("a.connect-button", "Connect Wallet"),
        );*/
        this.append(
            el("a.user-button", el("i.far.fa-user"), {
                click: (event, button) => {
                    const rect = button.rect;
                    new UserMenu({ left: rect.right - 220, top: rect.bottom + 5 }).appendTo(BodyNode);
                },
            }),
        );
    }
}
