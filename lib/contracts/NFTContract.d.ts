import { BigNumberish } from "@ethersproject/bignumber";
import ERC721Contract from "./standard/ERC721Contract";
import { CakeNFT } from "./typechain";
export default class NFTContract extends ERC721Contract<CakeNFT> {
    constructor(address: string);
    getTokenURI(tokenId: BigNumberish): Promise<string>;
}
//# sourceMappingURL=NFTContract.d.ts.map