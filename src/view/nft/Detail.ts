import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "../Layout";

export default class Detail implements View {

    private container: DomNode;

    constructor(params: ViewParams) {
        Layout.current.content.append(this.container = el(".detail-view",
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
