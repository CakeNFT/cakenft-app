"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const MobileMenu_1 = __importDefault(require("../ui/menu/MobileMenu"));
const PCMenu_1 = __importDefault(require("../ui/menu/PCMenu"));
const UserInfo_1 = __importDefault(require("../ui/UserInfo"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Layout {
    constructor() {
        Layout.current = this;
        skynode_1.BodyNode.append(this.container = (0, skynode_1.el)(".layout", (0, skynode_1.el)("header", (0, skynode_1.el)("a.logo", (0, skynode_1.el)("img", { src: "/images/logo.png", height: "40" }), "CakeNFT", { click: () => ViewUtil_1.default.go("/") }), new PCMenu_1.default(), (0, skynode_1.el)(".span"), new UserInfo_1.default(), (0, skynode_1.el)("a.menu-button", (0, skynode_1.el)("i.fas.fa-bars"), {
            click: (event, button) => {
                const rect = button.rect;
                new MobileMenu_1.default({ left: rect.right - 220, top: rect.bottom + 5 }).appendTo(skynode_1.BodyNode);
            },
        })), (0, skynode_1.el)("main", this.content = (0, skynode_1.el)(".content")), (0, skynode_1.el)("footer", (0, skynode_1.el)("section", (0, skynode_1.el)("h4", "Developer"), (0, skynode_1.el)("ul", (0, skynode_1.el)("li", (0, skynode_1.el)("a", "GitHub", { href: "https://github.com/cakenft", target: "_blank" })))), (0, skynode_1.el)(".social", (0, skynode_1.el)("a", (0, skynode_1.el)("i.fab.fa-twitter"), { href: "https://github.com/cakenft", target: "_blank" })), (0, skynode_1.el)(".copyright", "© 2021 CakeNFT, Inc"))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map