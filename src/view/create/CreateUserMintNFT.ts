import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "../Layout";

export default class CreateUserMintNFT implements View {

    private container: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el(".create-user-mint-nft-view",
            el("h1", "Create User Mint NFT"),
            el("label",
                "Name *",
                el("input", { placeholder: "NFT Name" }),
            ),
            el("label",
                "Symbol *",
                el("input", { placeholder: "NFT Symbol" }),
            ),
            el("label",
                "Version *",
                el("input", { placeholder: "NFT Version" }),
            ),
            el("label",
                "Base URI *",
                el("input", { placeholder: "NFT Base URI" }),
            ),
            el("a.submit-button",
                "Create",
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
