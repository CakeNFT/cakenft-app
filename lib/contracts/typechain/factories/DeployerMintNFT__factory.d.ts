import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { DeployerMintNFT } from "../DeployerMintNFT";
export declare class DeployerMintNFT__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(name: string, symbol: string, _version: string, baseURI_: string, overrides?: Overrides): Promise<DeployerMintNFT>;
    getDeployTransaction(name: string, symbol: string, _version: string, baseURI_: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): DeployerMintNFT;
    connect(signer: Signer): DeployerMintNFT__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): DeployerMintNFT;
}
//# sourceMappingURL=DeployerMintNFT__factory.d.ts.map