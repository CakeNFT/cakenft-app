import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CakeSimpleNFTV1 } from "../CakeSimpleNFTV1";
export declare class CakeSimpleNFTV1__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<CakeSimpleNFTV1>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): CakeSimpleNFTV1;
    connect(signer: Signer): CakeSimpleNFTV1__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CakeSimpleNFTV1;
}
//# sourceMappingURL=CakeSimpleNFTV1__factory.d.ts.map