import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import Config from "../Config";
import CakeNFTStoreArtifact from "./artifacts/contracts/CakeNFTStore.sol/CakeNFTStore.json";
import Contract from "./Contract";
import { CakeNFTStore } from "./typechain/CakeNFTStore";

export interface NFTInfo {
    deployer: string,
    cakeNFT: boolean,
    staking: BigNumber,
    fee: BigNumber,
}

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

    public async nfts(index: BigNumberish): Promise<string> {
        return await this.contract.nfts(index);
    }

    public async nftInfos(address: string): Promise<NFTInfo> {
        const [deployer, cakeNFT, staking, fee] = await this.contract.nftInfos(address);
        return { deployer, cakeNFT, staking, fee };
    }

    public async set(
        nft: string,
        staking: BigNumberish,
        fee: BigNumberish,
    ) {
        const contract = await this.loadWalletContract();
        await contract?.set(nft, staking, fee);
    }
}

export default new CakeNFTStoreContract();
