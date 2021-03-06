"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Wallet_1 = __importDefault(require("../../bsc/Wallet"));
const MenuBuilder_1 = __importDefault(require("./MenuBuilder"));
const usermenu_json_1 = __importDefault(require("./usermenu.json"));
class UserMenu extends skynode_1.ClosableFloatingDomNode {
    constructor(position) {
        super(position, ".user-menu");
        this.onDom("click", () => this.delete());
        this.load();
    }
    async load() {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            this.append(...MenuBuilder_1.default.build(usermenu_json_1.default.menu, owner));
        }
    }
}
exports.default = UserMenu;
//# sourceMappingURL=UserMenu.js.map