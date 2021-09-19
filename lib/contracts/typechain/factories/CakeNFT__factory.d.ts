import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CakeNFT } from "../CakeNFT";
export declare class CakeNFT__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(name: string, symbol: string, _version: string, baseURI_: string, overrides?: Overrides): Promise<CakeNFT>;
    getDeployTransaction(name: string, symbol: string, _version: string, baseURI_: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): CakeNFT;
    connect(signer: Signer): CakeNFT__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CakeNFT;
}
//# sourceMappingURL=CakeNFT__factory.d.ts.map