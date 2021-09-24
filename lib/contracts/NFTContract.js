"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ICakeNFT_json_1 = __importDefault(require("./artifacts/contracts/interfaces/ICakeNFT.sol/ICakeNFT.json"));
const ERC721Contract_1 = __importDefault(require("./standard/ERC721Contract"));
class NFTContract extends ERC721Contract_1.default {
    constructor(address) {
        super(address, ICakeNFT_json_1.default.abi, []);
    }
    async getTokenURI(tokenId) {
        return await this.contract.tokenURI(tokenId);
    }
}
exports.default = NFTContract;
//# sourceMappingURL=NFTContract.js.map