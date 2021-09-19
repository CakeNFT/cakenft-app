import CakeNFTArtifact from "./artifacts/contracts/CakeNFT.sol/CakeNFT.json";
import ERC721Contract from "./standard/ERC721Contract";
import { CakeNFT } from "./typechain";

export default class NFTContract extends ERC721Contract<CakeNFT> {

    constructor(address: string) {
        super(address, CakeNFTArtifact.abi, []);
    }
}
