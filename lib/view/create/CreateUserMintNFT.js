"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("../Layout"));
class CreateUserMintNFT {
    constructor() {
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".create-user-mint-nft-view", (0, skynode_1.el)("h1", "Create User Mint NFT"), (0, skynode_1.el)("label", "Name *", (0, skynode_1.el)("input", { placeholder: "NFT Name" })), (0, skynode_1.el)("label", "Symbol *", (0, skynode_1.el)("input", { placeholder: "NFT Symbol" })), (0, skynode_1.el)("label", "Version *", (0, skynode_1.el)("input", { placeholder: "NFT Version" })), (0, skynode_1.el)("label", "Base URI *", (0, skynode_1.el)("input", { placeholder: "NFT Base URI" })), (0, skynode_1.el)("a.submit-button", "Create")));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = CreateUserMintNFT;
//# sourceMappingURL=CreateUserMintNFT.js.map