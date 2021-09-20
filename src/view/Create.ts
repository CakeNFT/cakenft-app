import { DomNode, el } from "@hanul/skynode";
import { SkyRouter, View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Create implements View {

    private container: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el(".create-view",
            el("main",
                el("h1", "Create NFTs"),
                el("section",
                    el("a",
                        el("h3", "Create new item"),
                        el("p", "Create new NFT Simple & Easy"),
                        { click: () => SkyRouter.go("/create/one") },
                    ),
                ),
                el("section",
                    el("h2", "Create new smart contract"),
                    el("p", "You need ", el("a", "Base URL")),
                    el("a",
                        el("h3", "Create Deployer Mint NFT"),
                        el("p", "Mint deployer only"),
                        { click: () => SkyRouter.go("/create/deployer-mint-nft") },
                    ),
                    el("a",
                        el("h3", "Create User Mint NFT"),
                        el("p", "Mint everyone"),
                        { click: () => SkyRouter.go("/create/user-mint-nft") },
                    ),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
