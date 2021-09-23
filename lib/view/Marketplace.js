"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Wallet_1 = __importDefault(require("../bsc/Wallet"));
const CakeNFTStoreContract_1 = __importDefault(require("../contracts/CakeNFTStoreContract"));
const CakeSimpleNFTV1Contract_1 = __importDefault(require("../contracts/CakeSimpleNFTV1Contract"));
const Layout_1 = __importDefault(require("./Layout"));
class Marketplace {
    constructor() {
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".marketplace-view"));
        this.load();
    }
    async load() {
        const count = await CakeNFTStoreContract_1.default.nftCount();
        console.log(count);
        CakeNFTStoreContract_1.default.setNFTDeployer(CakeSimpleNFTV1Contract_1.default.address, await Wallet_1.default.loadAddress(), 3000, 0);
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Marketplace;
//# sourceMappingURL=Marketplace.js.map