import { DomNode, el } from "@hanul/skynode";
import { SkyRouter, View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Home implements View {

    private container: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el(".home-view",
            el("header",
                el("h2", "Trade NFT, Earn Cake"),
                el("a.trade-button", "Trade Now", {
                    click: () => SkyRouter.go("marketplace"),
                }),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
