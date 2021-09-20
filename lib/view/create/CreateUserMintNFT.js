"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const UserMintNFT_json_1 = __importDefault(require("../../contracts/artifacts/contracts/UserMintNFT.sol/UserMintNFT.json"));
const CakeNFTStoreContract_1 = __importDefault(require("../../contracts/CakeNFTStoreContract"));
const Contract_1 = __importDefault(require("../../contracts/Contract"));
const Layout_1 = __importDefault(require("../Layout"));
class CreateUserMintNFT {
    constructor() {
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".create-user-mint-nft-view", (0, skynode_1.el)("h1", "Create User Mint NFT"), (0, skynode_1.el)("form", (0, skynode_1.el)("label", "Name *", (0, skynode_1.el)("input", { name: "name", placeholder: "NFT Name" })), (0, skynode_1.el)("label", "Symbol *", (0, skynode_1.el)("input", { placeholder: "NFT Symbol" })), (0, skynode_1.el)("label", "Version *", (0, skynode_1.el)("input", { placeholder: "NFT Version" })), (0, skynode_1.el)("label", "Base URI *", (0, skynode_1.el)("input", { placeholder: "NFT Base URI" })), (0, skynode_1.el)("label", "Mint Price *", (0, skynode_1.el)("input", { placeholder: "NFT Mint Price" })), (0, skynode_1.el)("label", "Max Mint Count *", (0, skynode_1.el)("input", { placeholder: "NFT Max Mint Count" })), (0, skynode_1.el)("input", { type: "submit", value: "Create" }), {
            submit: (event, form) => {
                const formData = new FormData(form.domElement);
                const address = Contract_1.default.deployContract(UserMintNFT_json_1.default.abi, UserMintNFT_json_1.default.bytecode, CakeNFTStoreContract_1.default.address, formData.get("name"), formData.get("symbol"), formData.get("version"), formData.get("baseURI"), ethers_1.utils.formatEther(formData.get("mintPrice")), formData.get("maxMintCount"));
                console.log(address);
                event.preventDefault();
            },
        })));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = CreateUserMintNFT;
//# sourceMappingURL=CreateUserMintNFT.js.map