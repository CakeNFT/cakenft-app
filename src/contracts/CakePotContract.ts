import Config from "../Config";
import CakeNFTStoreArtifact from "./artifacts/contracts/CakeNFTStore.sol/CakeNFTStore.json";
import Contract from "./Contract";
import { CakeNFTStore } from "./typechain/CakeNFTStore";

class CakeNFTStoreContract extends Contract<CakeNFTStore> {

    constructor() {
        super(Config.contracts.CakeNFTStore, CakeNFTStoreArtifact.abi, [
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
}

export default new CakeNFTStoreContract();
