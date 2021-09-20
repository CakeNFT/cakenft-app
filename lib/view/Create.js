"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const Wallet_1 = __importDefault(require("../bsc/Wallet"));
const CakeSimpleNFTV1Contract_1 = __importDefault(require("../contracts/CakeSimpleNFTV1Contract"));
const Minting_1 = __importDefault(require("../ui/loading/Minting"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Create {
    constructor() {
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".create-view", (0, skynode_1.el)("main", (0, skynode_1.el)("h1", "Create NFTs"), (0, skynode_1.el)("section", (0, skynode_1.el)("a", (0, skynode_1.el)("h3", "Create new item"), (0, skynode_1.el)("p", "Create new NFT Simple & Easy"), {
            click: async () => {
                this.minting = new Minting_1.default();
                try {
                    await CakeSimpleNFTV1Contract_1.default.mint();
                }
                catch (e) {
                    this.minting.delete();
                    this.minting = undefined;
                }
            },
        })), (0, skynode_1.el)("section", (0, skynode_1.el)("h2", "Create new smart contract"), (0, skynode_1.el)("p", "You need ", (0, skynode_1.el)("a", "Base URL")), (0, skynode_1.el)("a", (0, skynode_1.el)("h3", "Create Deployer Mint NFT"), (0, skynode_1.el)("p", "Mint deployer only"), { click: () => ViewUtil_1.default.go("/create/deployer-mint-nft") }), (0, skynode_1.el)("a", (0, skynode_1.el)("h3", "Create User Mint NFT"), (0, skynode_1.el)("p", "Mint everyone"), { click: () => ViewUtil_1.default.go("/create/user-mint-nft") })))));
        CakeSimpleNFTV1Contract_1.default.on("Transfer", this.transferHandler);
    }
    changeParams(params, uri) { }
    async transferHandler(from, to, id) {
        if (from === ethers_1.constants.AddressZero && to === await Wallet_1.default.loadAddress()) {
            ViewUtil_1.default.go(`/${CakeSimpleNFTV1Contract_1.default.address}/${id}/update`);
        }
    }
    close() {
        var _a;
        (_a = this.minting) === null || _a === void 0 ? void 0 : _a.delete();
        CakeSimpleNFTV1Contract_1.default.off("Transfer", this.transferHandler);
        this.container.delete();
    }
}
exports.default = Create;
//# sourceMappingURL=Create.js.map