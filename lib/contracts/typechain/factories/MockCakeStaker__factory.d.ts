import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockCakeStaker } from "../MockCakeStaker";
export declare class MockCakeStaker__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_cake: string, overrides?: Overrides): Promise<MockCakeStaker>;
    getDeployTransaction(_cake: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): MockCakeStaker;
    connect(signer: Signer): MockCakeStaker__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockCakeStaker;
}
//# sourceMappingURL=MockCakeStaker__factory.d.ts.map