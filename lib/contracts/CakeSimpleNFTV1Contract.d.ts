import ERC721Contract from "./standard/ERC721Contract";
import { CakeSimpleNFTV1 } from "./typechain";
declare class CakeSimpleNFTV1Contract extends ERC721Contract<CakeSimpleNFTV1> {
    constructor();
    mint(): Promise<void>;
}
declare const _default: CakeSimpleNFTV1Contract;
export default _default;
//# sourceMappingURL=CakeSimpleNFTV1Contract.d.ts.map