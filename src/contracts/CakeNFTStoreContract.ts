import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { utils } from "ethers";
import Wallet from "../bsc/Wallet";
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

    public async nftCount(): Promise<BigNumber> {
        return await this.contract.nftCount();
    }

    public async setNFTDeployer(
        nft: string,
        deployer: string,
        staking: BigNumberish,
        fee: BigNumberish,
    ) {
        const contract = await this.loadWalletContract();
        const messageHash = utils.solidityKeccak256(["address", "address", "uint256", "uint256"], [nft, deployer, staking, fee]);
        const signature = await Wallet.signMessage(messageHash);
        await contract?.setNFTDeployer(
            nft, deployer, staking, fee, signature,
        );
    }
}

export default new CakeNFTStoreContract();
