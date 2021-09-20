"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyrouter_1 = require("skyrouter");
const Layout_1 = __importDefault(require("./Layout"));
class Create {
    constructor() {
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".create-view", (0, skynode_1.el)("main", (0, skynode_1.el)("h1", "Create NFTs"), (0, skynode_1.el)("section", (0, skynode_1.el)("a", (0, skynode_1.el)("h3", "Create new item"), (0, skynode_1.el)("p", "Create new NFT Simple & Easy"), { click: () => skyrouter_1.SkyRouter.go("/create/one") })), (0, skynode_1.el)("section", (0, skynode_1.el)("h2", "Create new smart contract"), (0, skynode_1.el)("p", "You need ", (0, skynode_1.el)("a", "Base URL")), (0, skynode_1.el)("a", (0, skynode_1.el)("h3", "Create Deployer Mint NFT"), (0, skynode_1.el)("p", "Mint deployer only"), { click: () => skyrouter_1.SkyRouter.go("/create/deployer-mint-nft") }), (0, skynode_1.el)("a", (0, skynode_1.el)("h3", "Create User Mint NFT"), (0, skynode_1.el)("p", "Mint everyone"), { click: () => skyrouter_1.SkyRouter.go("/create/user-mint-nft") })))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Create;
//# sourceMappingURL=Create.js.map