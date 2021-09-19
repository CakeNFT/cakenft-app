import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Collection implements View {

    private container: DomNode;

    constructor(params: ViewParams) {
        Layout.current.content.append(this.container = el(".collection-view",
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
