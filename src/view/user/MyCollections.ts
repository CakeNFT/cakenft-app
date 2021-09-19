import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "../Layout";

export default class MyCollections implements View {

    private container: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el(".my-collections-view",
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
