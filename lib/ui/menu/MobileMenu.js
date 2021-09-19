"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const menu_json_1 = __importDefault(require("./menu.json"));
const usermenu_json_1 = __importDefault(require("./usermenu.json"));
const MenuBuilder_1 = __importDefault(require("./MenuBuilder"));
class MobileMenu extends skynode_1.ClosableFloatingDomNode {
    constructor(position) {
        super(position, ".mobile-menu");
        this.append(...MenuBuilder_1.default.build(menu_json_1.default.menu), ...MenuBuilder_1.default.build(usermenu_json_1.default.menu));
        this.onDom("click", () => this.delete());
    }
}
exports.default = MobileMenu;
//# sourceMappingURL=MobileMenu.js.map