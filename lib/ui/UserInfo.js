"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const UserMenu_1 = __importDefault(require("./menu/UserMenu"));
class UserInfo extends skynode_1.DomNode {
    constructor() {
        super(".user-info");
        this.append((0, skynode_1.el)("a.user-button", (0, skynode_1.el)("i.far.fa-user"), {
            click: (event, button) => {
                const rect = button.rect;
                new UserMenu_1.default({ left: rect.right - 220, top: rect.bottom + 5 }).appendTo(skynode_1.BodyNode);
            },
        }));
    }
}
exports.default = UserInfo;
//# sourceMappingURL=UserInfo.js.map