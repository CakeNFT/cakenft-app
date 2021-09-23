import { SkyRouter } from "skyrouter";
import Collection from "./view/Collection";
import Create from "./view/Create";
import CreateDeployerMintNFT from "./view/create/CreateDeployerMintNFT";
import CreateUserMintNFT from "./view/create/CreateUserMintNFT";
import Home from "./view/Home";
import Layout from "./view/Layout";
import Marketplace from "./view/Marketplace";
import Detail from "./view/nft/Detail";
import Update from "./view/nft/Update";
import Ranking from "./view/Ranking";
import UserCollections from "./view/user/UserCollections";
import UserNFTs from "./view/user/UserNFTs";

SkyRouter.route("**", Layout);
SkyRouter.route("", Home);
SkyRouter.route("marketplace", Marketplace);
SkyRouter.route("ranking", Ranking);

SkyRouter.route("create", Create);
SkyRouter.route("create/deployer-mint-nft", CreateDeployerMintNFT);
SkyRouter.route("create/user-mint-nft", CreateUserMintNFT);

SkyRouter.route("user/{address}/nfts", UserNFTs);
SkyRouter.route("user/{address}/collections", UserCollections);

SkyRouter.route("{address}", Collection, [
    "marketplace",
    "ranking",
    "create",
]);
SkyRouter.route("{address}/{id}", Detail, [
    "create/one",
    "create/deployer-mint-nft",
    "create/user-mint-nft",
]);
SkyRouter.route("{address}/{id}/update", Update);

if (sessionStorage.__spa_path) {
    SkyRouter.go(sessionStorage.__spa_path);
    sessionStorage.removeItem("__spa_path");
}