import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CakeOwnerVault } from "../CakeOwnerVault";
export declare class CakeOwnerVault__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_cake: string, _cakeStaker: string, overrides?: Overrides): Promise<CakeOwnerVault>;
    getDeployTransaction(_cake: string, _cakeStaker: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): CakeOwnerVault;
    connect(signer: Signer): CakeOwnerVault__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CakeOwnerVault;
}
//# sourceMappingURL=CakeOwnerVault__factory.d.ts.map