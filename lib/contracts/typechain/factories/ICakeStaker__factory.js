"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICakeStaker__factory = void 0;
const ethers_1 = require("ethers");
class ICakeStaker__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICakeStaker__factory = ICakeStaker__factory;
const _abi = [
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
//# sourceMappingURL=ICakeStaker__factory.js.map