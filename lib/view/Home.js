"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyrouter_1 = require("skyrouter");
const Layout_1 = __importDefault(require("./Layout"));
class Home {
    constructor() {
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".home-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h2", "Trade NFT, Earn Cake"), (0, skynode_1.el)("a.trade-button", "Trade Now", {
            click: () => skyrouter_1.SkyRouter.go("marketplace"),
        }))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map