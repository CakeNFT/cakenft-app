import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CakeNFTStore } from "../CakeNFTStore";
export declare class CakeNFTStore__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_cake: string, _cakeStaker: string, _ownerVault: string, _vault: string, overrides?: Overrides): Promise<CakeNFTStore>;
    getDeployTransaction(_cake: string, _cakeStaker: string, _ownerVault: string, _vault: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): CakeNFTStore;
    connect(signer: Signer): CakeNFTStore__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CakeNFTStore;
}
//# sourceMappingURL=CakeNFTStore__factory.d.ts.map