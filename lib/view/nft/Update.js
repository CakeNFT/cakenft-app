"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("../Layout"));
class Update {
    constructor(params) {
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".update-view", (0, skynode_1.el)("main", (0, skynode_1.el)("h1", "Update NFT Information"))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Update;
//# sourceMappingURL=Update.js.map