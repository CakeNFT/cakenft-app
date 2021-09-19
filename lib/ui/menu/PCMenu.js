"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const menu_json_1 = __importDefault(require("./menu.json"));
const MenuBuilder_1 = __importDefault(require("./MenuBuilder"));
const UserMenu_1 = __importDefault(require("./UserMenu"));
class PCMenu extends skynode_1.DomNode {
    constructor() {
        super(".pc-menu");
        this.append(...MenuBuilder_1.default.build(menu_json_1.default.menu), (0, skynode_1.el)("a.user", {
            click: (event, button) => {
                const rect = button.rect;
                new UserMenu_1.default({ left: rect.right - 200, top: rect.top + 36 }).appendTo(skynode_1.BodyNode);
            },
        }));
    }
}
exports.default = PCMenu;
//# sourceMappingURL=PCMenu.js.map