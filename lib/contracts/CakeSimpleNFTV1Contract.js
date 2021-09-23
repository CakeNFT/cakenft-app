"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const CakeSimpleNFTV1_json_1 = __importDefault(require("./artifacts/contracts/CakeSimpleNFTV1.sol/CakeSimpleNFTV1.json"));
const ERC721Contract_1 = __importDefault(require("./standard/ERC721Contract"));
class CakeSimpleNFTV1Contract extends ERC721Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.CakeSimpleNFTV1, CakeSimpleNFTV1_json_1.default.abi, []);
    }
    async getArtist(tokenId) {
        return await this.contract.artists(tokenId);
    }
    async mint() {
        const contract = await this.loadWalletContract();
        await (contract === null || contract === void 0 ? void 0 : contract.mint());
    }
}
exports.default = new CakeSimpleNFTV1Contract();
//# sourceMappingURL=CakeSimpleNFTV1Contract.js.map