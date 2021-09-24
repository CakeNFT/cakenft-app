import { BigNumber, BigNumberish, constants, ContractInterface, ethers } from "ethers";
import NetworkProvider from "../../bsc/NetworkProvider";
import Contract from "../Contract";

export default class ERC721Contract<CT extends ethers.Contract> extends Contract<CT> {

    constructor(address: string, abi: ContractInterface, eventNames: string[]) {
        super(address, abi, eventNames.concat([
            "Transfer",
            "Approval",
            "ApprovalForAll",
        ]));
    }

    public async getName(): Promise<string> {
        return await this.contract.name();
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return await this.contract.balanceOf(owner);
    }

    public async ownerOf(id: BigNumberish): Promise<string> {
        return await this.contract.ownerOf(id);
    }

    public async getNonce(id: BigNumberish): Promise<BigNumber> {
        return await this.contract.nonces(id);
    }

    public async getNonceForAll(owner: string): Promise<BigNumber> {
        return await this.contract.noncesForAll(owner);
    }

    public async isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return await this.contract.isApprovedForAll(owner, operator);
    }

    public async getMintedIds() {
        const eventFilter = this.contract.filters.Transfer(constants.AddressZero);
        const fromBlock = await NetworkProvider.getBlockNumber() - 4000;
        const events = await this.contract.queryFilter(eventFilter, fromBlock);
        console.log(events);
    }
}
