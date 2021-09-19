import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";

export default class Layout implements View {

    public static current: Layout;

    private container: DomNode;
    public content: DomNode;
    
    constructor() {
        Layout.current = this;
        BodyNode.append(this.container = el(".layout",
            el("header",
            ),
            el("main",
                this.content = el(".content"),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
