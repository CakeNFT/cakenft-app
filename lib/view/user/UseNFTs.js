"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("../Layout"));
class MyNFTs {
    constructor() {
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".my-nfts-view"));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = MyNFTs;
//# sourceMappingURL=UseNFTs.js.map