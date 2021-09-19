import { SkyRouter } from "skyrouter";
import Collection from "./view/Collection";
import Create from "./view/Create";
import CreateDeployerMintNFT from "./view/create/CreateDeployerMintNFT";
import CreateOne from "./view/create/CreateOne";
import CreateUserMintNFT from "./view/create/CreateUserMintNFT";
import Detail from "./view/Detail";
import Home from "./view/Home";
import Layout from "./view/Layout";
import Marketplace from "./view/Marketplace";
import Ranking from "./view/Ranking";
import MyCollections from "./view/user/MyCollections";
import MyNFTs from "./view/user/MyNFTs";

SkyRouter.route("**", Layout);
SkyRouter.route("", Home);
SkyRouter.route("marketplace", Marketplace);
SkyRouter.route("ranking", Ranking);

SkyRouter.route("create", Create);
SkyRouter.route("create/one", CreateOne);
SkyRouter.route("create/deployer-mint-nft", CreateDeployerMintNFT);
SkyRouter.route("create/user-mint-nft", CreateUserMintNFT);

SkyRouter.route("user/my-nfts", MyNFTs);
SkyRouter.route("user/my-collections", MyCollections);

SkyRouter.route("{address}", Collection, [
    "marketplace",
    "ranking",
    "create",
]);
SkyRouter.route("{address}/{id}", Detail, [
    "create/one",
    "create/deployer-mint-nft",
    "create/user-mint-nft",
    "user/my-nfts",
    "user/my-collections",
]);

if (sessionStorage.__spa_path) {
    SkyRouter.go(sessionStorage.__spa_path);
    sessionStorage.removeItem("__spa_path");
}