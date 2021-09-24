import { BigNumberish } from "@ethersproject/bignumber";
import ICakeNFTArtifact from "./artifacts/contracts/interfaces/ICakeNFT.sol/ICakeNFT.json";
import ERC721Contract from "./standard/ERC721Contract";
import { ICakeNFT } from "./typechain";

export default class NFTContract extends ERC721Contract<ICakeNFT> {

    constructor(address: string) {
        super(address, ICakeNFTArtifact.abi, []);
    }

    public async getTokenURI(tokenId: BigNumberish): Promise<string> {
        return await this.contract.tokenURI(tokenId);
    }
}
