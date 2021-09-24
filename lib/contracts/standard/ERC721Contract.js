"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const NetworkProvider_1 = __importDefault(require("../../bsc/NetworkProvider"));
const Contract_1 = __importDefault(require("../Contract"));
class ERC721Contract extends Contract_1.default {
    constructor(address, abi, eventNames) {
        super(address, abi, eventNames.concat([
            "Transfer",
            "Approval",
            "ApprovalForAll",
        ]));
    }
    async getName() {
        return await this.contract.name();
    }
    async balanceOf(owner) {
        return await this.contract.balanceOf(owner);
    }
    async ownerOf(id) {
        return await this.contract.ownerOf(id);
    }
    async getNonce(id) {
        return await this.contract.nonces(id);
    }
    async getNonceForAll(owner) {
        return await this.contract.noncesForAll(owner);
    }
    async isApprovedForAll(owner, operator) {
        return await this.contract.isApprovedForAll(owner, operator);
    }
    async getMintedIds() {
        const eventFilter = this.contract.filters.Transfer(ethers_1.constants.AddressZero);
        const fromBlock = await NetworkProvider_1.default.getBlockNumber() - 4000;
        const events = await this.contract.queryFilter(eventFilter, fromBlock);
        console.log(events);
    }
}
exports.default = ERC721Contract;
//# sourceMappingURL=ERC721Contract.js.map