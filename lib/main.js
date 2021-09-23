"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyrouter_1 = require("skyrouter");
const Collection_1 = __importDefault(require("./view/Collection"));
const Create_1 = __importDefault(require("./view/Create"));
const CreateDeployerMintNFT_1 = __importDefault(require("./view/create/CreateDeployerMintNFT"));
const CreateUserMintNFT_1 = __importDefault(require("./view/create/CreateUserMintNFT"));
const Home_1 = __importDefault(require("./view/Home"));
const Layout_1 = __importDefault(require("./view/Layout"));
const Marketplace_1 = __importDefault(require("./view/Marketplace"));
const Detail_1 = __importDefault(require("./view/nft/Detail"));
const Update_1 = __importDefault(require("./view/nft/Update"));
const Ranking_1 = __importDefault(require("./view/Ranking"));
const UserCollections_1 = __importDefault(require("./view/user/UserCollections"));
const UserNFTs_1 = __importDefault(require("./view/user/UserNFTs"));
skyrouter_1.SkyRouter.route("**", Layout_1.default);
skyrouter_1.SkyRouter.route("", Home_1.default);
skyrouter_1.SkyRouter.route("marketplace", Marketplace_1.default);
skyrouter_1.SkyRouter.route("ranking", Ranking_1.default);
skyrouter_1.SkyRouter.route("create", Create_1.default);
skyrouter_1.SkyRouter.route("create/deployer-mint-nft", CreateDeployerMintNFT_1.default);
skyrouter_1.SkyRouter.route("create/user-mint-nft", CreateUserMintNFT_1.default);
skyrouter_1.SkyRouter.route("user/{address}/nfts", UserNFTs_1.default);
skyrouter_1.SkyRouter.route("user/{address}/collections", UserCollections_1.default);
skyrouter_1.SkyRouter.route("{address}", Collection_1.default, [
    "marketplace",
    "ranking",
    "create",
]);
skyrouter_1.SkyRouter.route("{address}/{id}", Detail_1.default, [
    "create/one",
    "create/deployer-mint-nft",
    "create/user-mint-nft",
]);
skyrouter_1.SkyRouter.route("{address}/{id}/update", Update_1.default);
if (sessionStorage.__spa_path) {
    skyrouter_1.SkyRouter.go(sessionStorage.__spa_path);
    sessionStorage.removeItem("__spa_path");
}
//# sourceMappingURL=main.js.map