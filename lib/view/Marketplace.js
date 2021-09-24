"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const CakeNFTStoreContract_1 = __importDefault(require("../contracts/CakeNFTStoreContract"));
const NFTContract_1 = __importDefault(require("../contracts/NFTContract"));
const Layout_1 = __importDefault(require("./Layout"));
class Marketplace {
    constructor() {
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".marketplace-view"));
        this.load();
    }
    async load() {
        const count = await CakeNFTStoreContract_1.default.nftCount();
        const promises1 = [];
        for (let i = 0; i < count.toNumber(); i += 1) {
            promises1.push(new Promise(async (resolve) => {
                resolve(await CakeNFTStoreContract_1.default.nfts(i));
            }));
        }
        const addresses = await Promise.all(promises1);
        for (const address of addresses) {
            const contract = new NFTContract_1.default(address);
            contract.getMintedIds();
        }
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Marketplace;
//# sourceMappingURL=Marketplace.js.map