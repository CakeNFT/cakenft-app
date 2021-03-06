"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Dialogue extends skynode_1.Popup {
    constructor(tag, title, confirmTitle, confirm) {
        super(".popup-background.dialogue-background");
        this.append(this.content = (0, skynode_1.el)(`.dialogue${tag}`, (0, skynode_1.el)("h1", title), (0, skynode_1.el)("a.cancel-button", "Cancel", {
            click: () => this.delete(),
        }), (0, skynode_1.el)("a.confirm-button", confirmTitle, {
            click: () => {
                if (confirm() !== false) {
                    this.delete();
                }
            },
        })));
    }
}
exports.default = Dialogue;
//# sourceMappingURL=Dialogue.js.map