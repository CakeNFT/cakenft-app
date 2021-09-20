"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class PCMenu extends skynode_1.DomNode {
    constructor() {
        el("a.user-button", el("i.far.fa-user"), {
            click: (event, button) => {
                const rect = button.rect;
                new UserMenu({ left: rect.right - 220, top: rect.bottom + 5 }).appendTo(BodyNode);
            },
        });
    }
}
exports.default = PCMenu;
//# sourceMappingURL=UserButton.js.map