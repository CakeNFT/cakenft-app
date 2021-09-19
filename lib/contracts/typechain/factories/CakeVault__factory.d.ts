import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CakeVault } from "../CakeVault";
export declare class CakeVault__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_cake: string, _cakeStaker: string, overrides?: Overrides): Promise<CakeVault>;
    getDeployTransaction(_cake: string, _cakeStaker: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): CakeVault;
    connect(signer: Signer): CakeVault__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CakeVault;
}
//# sourceMappingURL=CakeVault__factory.d.ts.map