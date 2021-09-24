import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import Contract from "./Contract";
import { CakeNFTStore } from "./typechain/CakeNFTStore";
export interface NFTInfo {
    deployer: string;
    cakeNFT: boolean;
    staking: BigNumber;
    fee: BigNumber;
}
declare class CakeNFTStoreContract extends Contract<CakeNFTStore> {
    constructor();
    nftCount(): Promise<BigNumber>;
    nfts(index: BigNumberish): Promise<string>;
    nftInfos(address: string): Promise<NFTInfo>;
    set(nft: string, staking: BigNumberish, fee: BigNumberish): Promise<void>;
}
declare const _default: CakeNFTStoreContract;
export default _default;
//# sourceMappingURL=CakeNFTStoreContract.d.ts.map