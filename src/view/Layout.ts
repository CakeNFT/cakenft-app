import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import MobileMenu from "../ui/menu/MobileMenu";
import PCMenu from "../ui/menu/PCMenu";

export default class Layout implements View {

    public static current: Layout;

    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;
        BodyNode.append(this.container = el(".layout",
            el("header",
                el("a.menu-button", el("i.fas.fa-bars"), {
                    click: (event, button) => {
                        const rect = button.rect;
                        new MobileMenu({ left: rect.right - 180, top: rect.bottom }).appendTo(BodyNode);
                    },
                }),
                new PCMenu(),
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
