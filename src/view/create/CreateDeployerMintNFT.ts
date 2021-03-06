import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "../Layout";

export default class CreateDeployerMintNFT implements View {

    private container: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el(".create-deployer-mint-nft-view",
            el("h1", "Create Deployer Mint NFT"),
            el("label",
                "Name *",
                el("input", { placeholder: "NFT Name" }),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
