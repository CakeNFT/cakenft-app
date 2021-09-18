/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CakeVault } from "../CakeVault";

export class CakeVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _cake: string,
    _cakeStaker: string,
    overrides?: Overrides
  ): Promise<CakeVault> {
    return super.deploy(
      _cake,
      _cakeStaker,
      overrides || {}
    ) as Promise<CakeVault>;
  }
  getDeployTransaction(
    _cake: string,
    _cakeStaker: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_cake, _cakeStaker, overrides || {});
  }
  attach(address: string): CakeVault {
    return super.attach(address) as CakeVault;
  }
  connect(signer: Signer): CakeVault__factory {
    return super.connect(signer) as CakeVault__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CakeVault {
    return new Contract(address, _abi, signerOrProvider) as CakeVault;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_cake",
        type: "address",
      },
      {
        internalType: "contract ICakeStaker",
        name: "_cakeStaker",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "cake",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cakeStaker",
    outputs: [
      {
        internalType: "contract ICakeStaker",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
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
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalReward",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052600060015534801561001557600080fd5b506040516109a03803806109a0833981016040819052610034916100ab565b61003d3361005b565b6001600160601b0319606092831b8116608052911b1660a0526100fd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100be57600080fd5b82516100c9816100e5565b60208401519092506100da816100e5565b809150509250929050565b6001600160a01b03811681146100fa57600080fd5b50565b60805160601c60a05160601c61084161015f60003960008181609d01528181610192015281816102400152818161051d01526105df015260008181610141015281816102be0152818161036801528181610481015261054c01526108416000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063750142e611610066578063750142e6146101015780638da5cb5b14610118578063b6b55f2514610129578063dce174841461013c578063f2fde38b1461016357600080fd5b80631d1dc697146100985780632e1a7d4d146100dc5780634e71d92d146100f1578063715018a6146100f9575b600080fd5b6100bf7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100ef6100ea3660046107b3565b610176565b005b6100ef610348565b6100ef6103f4565b61010a60015481565b6040519081526020016100d3565b6000546001600160a01b03166100bf565b6100ef6101373660046107b3565b61045f565b6100bf7f000000000000000000000000000000000000000000000000000000000000000081565b6100ef610171366004610761565b610646565b604051631175a1dd60e01b8152600060048201523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631175a1dd9060440160206040518083038186803b1580156101dc57600080fd5b505afa1580156101f0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021491906107cc565b6001600082825461022591906107e5565b9091555050604051631058d28160e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631058d28190602401600060405180830381600087803b15801561028c57600080fd5b505af11580156102a0573d6000803e3d6000fd5b505060405163a9059cbb60e01b8152336004820152602481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316925063a9059cbb9150604401602060405180830381600087803b15801561030c57600080fd5b505af1158015610320573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103449190610791565b5050565b60015460405163a9059cbb60e01b815233600482015260248101919091527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb90604401602060405180830381600087803b1580156103b457600080fd5b505af11580156103c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ec9190610791565b506000600155565b6000546001600160a01b031633146104535760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b61045d6000610711565b565b6040516323b872dd60e01b8152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b1580156104cd57600080fd5b505af11580156104e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105059190610791565b5060405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b390604401602060405180830381600087803b15801561059057600080fd5b505af11580156105a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c89190610791565b506040516341441d3b60e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906341441d3b90602401600060405180830381600087803b15801561062b57600080fd5b505af115801561063f573d6000803e3d6000fd5b5050505050565b6000546001600160a01b031633146106a05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161044a565b6001600160a01b0381166107055760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161044a565b61070e81610711565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561077357600080fd5b81356001600160a01b038116811461078a57600080fd5b9392505050565b6000602082840312156107a357600080fd5b8151801515811461078a57600080fd5b6000602082840312156107c557600080fd5b5035919050565b6000602082840312156107de57600080fd5b5051919050565b6000821982111561080657634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220b7a610650439dd2227862653b3f4d1a35c51b20f191dcdaf954f9c586293fb2a64736f6c63430008050033";
