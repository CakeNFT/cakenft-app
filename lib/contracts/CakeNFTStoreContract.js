"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Wallet_1 = __importDefault(require("../bsc/Wallet"));
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
    async setNFTDeployer(nft, deployer, staking, fee) {
        const contract = await this.loadWalletContract();
        const messageHash = ethers_1.utils.solidityKeccak256(["address", "address", "uint256", "uint256"], [nft, deployer, staking, fee]);
        const signature = await Wallet_1.default.signMessage(messageHash);
        await (contract === null || contract === void 0 ? void 0 : contract.setNFTDeployer(nft, deployer, staking, fee, signature));
    }
}
exports.default = new CakeNFTStoreContract();
//# sourceMappingURL=CakeNFTStoreContract.js.map