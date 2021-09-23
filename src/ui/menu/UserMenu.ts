import { ClosableFloatingDomNode, Position } from "@hanul/skynode";
import Wallet from "../../bsc/Wallet";
import MenuBuilder from "./MenuBuilder";
import usermenu from "./usermenu.json";

export default class UserMenu extends ClosableFloatingDomNode {

    constructor(position: Position) {
        super(position, ".user-menu");
        this.onDom("click", () => this.delete());
        this.load();
    }

    private async load() {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            this.append(
                ...MenuBuilder.build(usermenu.menu, owner),
            );
        }
    }
}
