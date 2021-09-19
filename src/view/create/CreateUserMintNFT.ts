import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "../Layout";

export default class CreateUserMintNFT implements View {

    private container: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el(".create-user-mint-nft-view",
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
