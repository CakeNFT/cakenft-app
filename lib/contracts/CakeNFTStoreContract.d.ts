import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import Contract from "./Contract";
import { CakeNFTStore } from "./typechain/CakeNFTStore";
declare class CakeNFTStoreContract extends Contract<CakeNFTStore> {
    constructor();
    nftCount(): Promise<BigNumber>;
    setNFTDeployer(nft: string, deployer: string, staking: BigNumberish, fee: BigNumberish): Promise<void>;
}
declare const _default: CakeNFTStoreContract;
export default _default;
//# sourceMappingURL=CakeNFTStoreContract.d.ts.map