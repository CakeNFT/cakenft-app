"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockCakeStaker__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class MockCakeStaker__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_cake, overrides) {
        return super.deploy(_cake, overrides || {});
    }
    getDeployTransaction(_cake, overrides) {
        return super.getDeployTransaction(_cake, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MockCakeStaker__factory = MockCakeStaker__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "contract MockCake",
                name: "_cake",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "cake",
        outputs: [
            {
                internalType: "contract MockCake",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "enterStaking",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "leaveStaking",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "pid",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "pendingCake",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "pid",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "userInfo",
        outputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "rewardDebt",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60a060405234801561001057600080fd5b5060405161050138038061050183398101604081905261002f91610044565b60601b6001600160601b031916608052610074565b60006020828403121561005657600080fd5b81516001600160a01b038116811461006d57600080fd5b9392505050565b60805160601c61045b6100a66000396000818160db01528181610150015281816101b601526102c7015261045b6000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631058d2811461005c5780631175a1dd1461007157806341441d3b1461009757806393f1a40b146100aa578063dce17484146100d6575b600080fd5b61006f61006a366004610383565b610115565b005b61008461007f36600461039c565b610273565b6040519081526020015b60405180910390f35b61006f6100a5366004610383565b6102a5565b6100c16100b836600461039c565b50600091829150565b6040805192835260208301919091520161008e565b6100fd7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161008e565b3360009081526020819052604081205461013790670de0b6b3a76400006103f0565b60405163140e25ad60e31b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a0712d6890602401600060405180830381600087803b15801561019c57600080fd5b505af11580156101b0573d6000803e3d6000fd5b505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb3383856101f091906103d8565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b15801561023657600080fd5b505af115801561024a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026e9190610361565b505050565b6001600160a01b03811660009081526020819052604081205461029e90670de0b6b3a76400006103f0565b9392505050565b6040516323b872dd60e01b8152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b15801561031357600080fd5b505af1158015610327573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034b9190610361565b5050336000908152602081905260409020439055565b60006020828403121561037357600080fd5b8151801515811461029e57600080fd5b60006020828403121561039557600080fd5b5035919050565b600080604083850312156103af57600080fd5b8235915060208301356001600160a01b03811681146103cd57600080fd5b809150509250929050565b600082198211156103eb576103eb61040f565b500190565b600081600019048311821515161561040a5761040a61040f565b500290565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220766e79eb8a73a9bf277346266ab4564c7c540f4c6e376fdf7d8c73e180e15bdf64736f6c63430008050033";
//# sourceMappingURL=MockCakeStaker__factory.js.map