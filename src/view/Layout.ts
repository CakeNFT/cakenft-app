import { BodyNode, DomNode, el } from "@hanul/skynode";
import { SkyRouter, View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import MobileMenu from "../ui/menu/MobileMenu";
import PCMenu from "../ui/menu/PCMenu";
import UserMenu from "../ui/menu/UserMenu";
import UserInfo from "../ui/UserInfo";

export default class Layout implements View {

    public static current: Layout;

    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;
        BodyNode.append(this.container = el(".layout",
            el("header",
                el("a.logo",
                    el("img", { src: "/images/logo.png", height: "40" }),
                    "CakeNFT",
                    { click: () => SkyRouter.go("/") },
                ),
                new PCMenu(),
                el(".span"),
                new UserInfo(),
                el("a.menu-button", el("i.fas.fa-bars"), {
                    click: (event, button) => {
                        const rect = button.rect;
                        new MobileMenu({ left: rect.right - 220, top: rect.bottom + 5 }).appendTo(BodyNode);
                    },
                }),
            ),
            el("main",
                this.content = el(".content"),
            ),
            el("footer",
                el("section",
                    el("h4", "Developer"),
                    el("ul",
                        el("li", el("a", "GitHub", { href: "https://github.com/cakenft", target: "_blank" })),
                    ),
                ),
                el(".social",
                    el("a", el("i.fab.fa-twitter"), { href: "https://github.com/cakenft", target: "_blank" }),
                ),
                el(".copyright",
                    "© 2021 CakeNFT, Inc",
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
