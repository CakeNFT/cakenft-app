"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const CakeNFTStore_json_1 = __importDefault(require("./artifacts/contracts/CakeNFTStore.sol/CakeNFTStore.json"));
const Contract_1 = __importDefault(require("./Contract"));
class CakeNFTStoreContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.CakeNFTStore, CakeNFTStore_json_1.default.abi, [
            "Sell",
            "Buy",
            "CancelSale",
            "UserMint",
            "Offer",
            "CancelOffer",
            "AcceptOffer",
            "Auction",
            "CancelAuction",
            "Bid",
            "Claim",
        ]);
    }
    async nftCount() {
        return await this.contract.nftCount();
    }
    async nfts(index) {
        return await this.contract.nfts(index);
    }
    async nftInfos(address) {
        const [deployer, cakeNFT, staking, fee] = await this.contract.nftInfos(address);
        return { deployer, cakeNFT, staking, fee };
    }
    async set(nft, staking, fee) {
        const contract = await this.loadWalletContract();
        await (contract === null || contract === void 0 ? void 0 : contract.set(nft, staking, fee));
    }
}
exports.default = new CakeNFTStoreContract();
//# sourceMappingURL=CakeNFTStoreContract.js.map