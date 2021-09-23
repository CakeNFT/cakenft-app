"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const CommonUtil_1 = __importDefault(require("../../CommonUtil"));
const Config_1 = __importDefault(require("../../Config"));
const CakeSimpleNFTV1Contract_1 = __importDefault(require("../../contracts/CakeSimpleNFTV1Contract"));
const NFTContract_1 = __importDefault(require("../../contracts/NFTContract"));
const NFTLoading_1 = __importDefault(require("../../component/loading/NFTLoading"));
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
class Detail {
    constructor(params) {
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".detail-view"));
        this.loading = new NFTLoading_1.default();
        this.loading.on("delete", () => this.loading = undefined);
        this.load(params.address, params.id);
    }
    changeParams(params, uri) {
        this.load(params.address, params.id);
    }
    async load(address, id) {
        var _a, _b;
        if (address !== undefined && id !== undefined) {
            if (((_a = this.contract) === null || _a === void 0 ? void 0 : _a.address) !== address) {
                this.contract = new NFTContract_1.default(address);
            }
            const isCakeNFT = this.contract.address === Config_1.default.contracts.CakeSimpleNFTV1;
            const collectionName = isCakeNFT ?
                CommonUtil_1.default.shortenAddress(await CakeSimpleNFTV1Contract_1.default.getArtist(id)) :
                await this.contract.getName();
            const uri = await this.contract.getTokenURI(id);
            const owner = await this.contract.ownerOf(id);
            const result = await fetch(uri);
            const metadata = await result.json();
            this.container.empty().append((0, skynode_1.el)(".art-container", (0, skynode_1.el)(".art", (0, skynode_1.el)("img", { src: metadata.image }))), (0, skynode_1.el)(".info", (0, skynode_1.el)("a.collection", collectionName, {
                click: () => ViewUtil_1.default.go(isCakeNFT ? `/user/${owner}/arts` : `/${address}`),
            }), (0, skynode_1.el)("h1", metadata.name), (0, skynode_1.el)(".owner", "Owned by ", (0, skynode_1.el)("a", CommonUtil_1.default.shortenAddress(owner)), {
                click: () => ViewUtil_1.default.go(`/user/${owner}/nfts`),
            }), (0, skynode_1.el)(".controller", (0, skynode_1.el)("a.offer-button", "Make Offer"))));
        }
        (_b = this.loading) === null || _b === void 0 ? void 0 : _b.delete();
    }
    close() {
        var _a;
        (_a = this.loading) === null || _a === void 0 ? void 0 : _a.delete();
        this.container.delete();
    }
}
exports.default = Detail;
//# sourceMappingURL=Detail.js.map