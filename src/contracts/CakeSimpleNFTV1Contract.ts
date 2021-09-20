import Config from "../Config";
import CakeSimpleNFTV1Artifact from "./artifacts/contracts/CakeSimpleNFTV1.sol/CakeSimpleNFTV1.json";
import ERC721Contract from "./standard/ERC721Contract";
import { CakeSimpleNFTV1 } from "./typechain";

class CakeSimpleNFTV1Contract extends ERC721Contract<CakeSimpleNFTV1> {

    constructor() {
        super(Config.contracts.CakeSimpleNFTV1, CakeSimpleNFTV1Artifact.abi, []);
    }

    public async mint() {
        const contract = await this.loadWalletContract();
        await contract?.mint();
    }
}

export default new CakeSimpleNFTV1Contract();
