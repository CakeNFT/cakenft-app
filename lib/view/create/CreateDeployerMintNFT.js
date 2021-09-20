"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("../Layout"));
class CreateDeployerMintNFT {
    constructor() {
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".create-deployer-mint-nft-view", (0, skynode_1.el)("h1", "Create Deployer Mint NFT"), (0, skynode_1.el)("label", "Name *", (0, skynode_1.el)("input", { placeholder: "NFT Name" }))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = CreateDeployerMintNFT;
//# sourceMappingURL=CreateDeployerMintNFT.js.map