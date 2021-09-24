/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DeployerMintNFT } from "../DeployerMintNFT";

export class DeployerMintNFT__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    _version: string,
    baseURI_: string,
    overrides?: Overrides
  ): Promise<DeployerMintNFT> {
    return super.deploy(
      name,
      symbol,
      _version,
      baseURI_,
      overrides || {}
    ) as Promise<DeployerMintNFT>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    _version: string,
    baseURI_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      _version,
      baseURI_,
      overrides || {}
    );
  }
  attach(address: string): DeployerMintNFT {
    return super.attach(address) as DeployerMintNFT;
  }
  connect(signer: Signer): DeployerMintNFT__factory {
    return super.connect(signer) as DeployerMintNFT__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeployerMintNFT {
    return new Contract(address, _abi, signerOrProvider) as DeployerMintNFT;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_version",
        type: "string",
      },
      {
        internalType: "string",
        name: "baseURI_",
        type: "string",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "artists",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
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
    inputs: [],
    name: "deployer",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    name: "massMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "nonces",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_version",
        type: "string",
      },
      {
        internalType: "string",
        name: "baseURI_",
        type: "string",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000600d553480156200001657600080fd5b506040516200248238038062002482833981016040819052620000399162000287565b835184908490620000529060009060208501906200012a565b508051620000689060019060208401906200012a565b5050600a80546001600160a01b031916331790555081516200009290600b9060208501906200012a565b508051620000a890600c9060208401906200012a565b508351602080860191909120835184830120604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f94810194909452830191909152606082015246608082018190523060a08301529060c00160405160208183030381529060405280519060200120600e81905550505050505062000393565b828054620001389062000340565b90600052602060002090601f0160209004810192826200015c5760008555620001a7565b82601f106200017757805160ff1916838001178555620001a7565b82800160010185558215620001a7579182015b82811115620001a75782518255916020019190600101906200018a565b50620001b5929150620001b9565b5090565b5b80821115620001b55760008155600101620001ba565b600082601f830112620001e257600080fd5b81516001600160401b0380821115620001ff57620001ff6200037d565b604051601f8301601f19908116603f011681019082821181831017156200022a576200022a6200037d565b816040528381526020925086838588010111156200024757600080fd5b600091505b838210156200026b57858201830151818301840152908201906200024c565b838211156200027d5760008385830101525b9695505050505050565b600080600080608085870312156200029e57600080fd5b84516001600160401b0380821115620002b657600080fd5b620002c488838901620001d0565b95506020870151915080821115620002db57600080fd5b620002e988838901620001d0565b945060408701519150808211156200030057600080fd5b6200030e88838901620001d0565b935060608701519150808211156200032557600080fd5b506200033487828801620001d0565b91505092959194509250565b600181811c908216806200035557607f821691505b602082108114156200037757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6120df80620003a36000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80634dc2b5c41161010457806395d89b41116100a2578063cd7e10c111610071578063cd7e10c1146103c4578063d5f39488146103e2578063e985e9c5146103f5578063f60886b51461043157600080fd5b806395d89b4114610383578063a22cb4651461038b578063b88d4fde1461039e578063c87b56dd146103b157600080fd5b80636352211e116100de5780636352211e146103425780636c0360eb1461035557806370a082311461035d5780637ac2ff7b1461037057600080fd5b80634dc2b5c4146103145780634f6ccce71461032757806354fd4d501461033a57600080fd5b806318160ddd1161017157806330adf81f1161014b57806330adf81f146102be5780633644e515146102e557806342842e0e146102ee57806342966c681461030157600080fd5b806318160ddd1461029057806323b872dd146102985780632f745c59146102ab57600080fd5b8063081812fc116101ad578063081812fc14610228578063095ea7b3146102535780631249c58b14610268578063141a468c1461027057600080fd5b806301ffc9a7146101d457806306661abd146101fc57806306fdde0314610213575b600080fd5b6101e76101e2366004611cf1565b610444565b60405190151581526020015b60405180910390f35b610205600d5481565b6040519081526020016101f3565b61021b610455565b6040516101f39190611e96565b61023b610236366004611dcc565b6104e7565b6040516001600160a01b0390911681526020016101f3565b610266610261366004611c67565b610581565b005b610205610697565b61020561027e366004611dcc565b600f6020526000908152604090205481565b600854610205565b6102666102a6366004611b73565b6106d9565b6102056102b9366004611c67565b61070a565b6102057f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad81565b610205600e5481565b6102666102fc366004611b73565b6107a0565b61026661030f366004611dcc565b6107bb565b610266610322366004611dcc565b6107ed565b610205610335366004611dcc565b61082e565b61021b6108c1565b61023b610350366004611dcc565b61094f565b61021b6109c6565b61020561036b366004611b25565b6109d3565b61026661037e366004611c91565b610a5a565b61021b610ce1565b610266610399366004611c2b565b610cf0565b6102666103ac366004611baf565b610cfb565b61021b6103bf366004611dcc565b610d33565b61023b6103d2366004611dcc565b50600a546001600160a01b031690565b600a5461023b906001600160a01b031681565b6101e7610403366004611b40565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61026661043f366004611d2b565b610e0e565b600061044f82610ef1565b92915050565b60606000805461046490611fbb565b80601f016020809104026020016040519081016040528092919081815260200182805461049090611fbb565b80156104dd5780601f106104b2576101008083540402835291602001916104dd565b820191906000526020600020905b8154815290600101906020018083116104c057829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166105655760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061058c8261094f565b9050806001600160a01b0316836001600160a01b031614156105fa5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161055c565b336001600160a01b038216148061061657506106168133610403565b6106885760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161055c565b6106928383610f16565b505050565b600a546000906001600160a01b031633146106b157600080fd5b50600d80549060019060006106c68385611f4c565b909155506106d690503382610f84565b90565b6106e333826110d2565b6106ff5760405162461bcd60e51b815260040161055c90611efb565b6106928383836111c9565b6000610715836109d3565b82106107775760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b606482015260840161055c565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b61069283838360405180602001604052806000815250610cfb565b6107c48161094f565b6001600160a01b0316336001600160a01b0316146107e157600080fd5b6107ea81611374565b50565b600a546001600160a01b0316331461080457600080fd5b60005b8181101561082a57610817610697565b50610823600182611f4c565b9050610807565b5050565b600061083960085490565b821061089c5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b606482015260840161055c565b600882815481106108af576108af612067565b90600052602060002001549050919050565b600b80546108ce90611fbb565b80601f01602080910402602001604051908101604052809291908181526020018280546108fa90611fbb565b80156109475780601f1061091c57610100808354040283529160200191610947565b820191906000526020600020905b81548152906001019060200180831161092a57829003601f168201915b505050505081565b6000818152600260205260408120546001600160a01b03168061044f5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161055c565b600c80546108ce90611fbb565b60006001600160a01b038216610a3e5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161055c565b506001600160a01b031660009081526003602052604090205490565b83421115610a6757600080fd5b600e546000868152600f60208181526040808420805482517f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad818601526001600160a01b038e1681850152606081018d90526080810182905260a08082018d90528451808303909101815260c08201855280519086012061190160f01b60e083015260e28201989098526101028082019890985283518082039098018852610122019092528551958301959095208a85529290915290926001929091610b2e908490611f4c565b9091555060009050610b3f8761094f565b9050806001600160a01b0316886001600160a01b03161415610b6057600080fd5b803b15610c3957604080516020810186905280820185905260f887901b6001600160f81b0319166060820152815160418183030181526061820192839052630b135d3f60e11b9092526001600160a01b03831691631626ba7e91610bc8918691606501611e7d565b60206040518083038186803b158015610be057600080fd5b505afa158015610bf4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c189190611d0e565b6001600160e01b031916631626ba7e60e01b14610c3457600080fd5b610ccd565b6040805160008082526020820180845285905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610c8d573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610cad57600080fd5b816001600160a01b0316816001600160a01b031614610ccb57600080fd5b505b610cd78888610f16565b5050505050505050565b60606001805461046490611fbb565b61082a33838361141b565b610d0533836110d2565b610d215760405162461bcd60e51b815260040161055c90611efb565b610d2d848484846114ea565b50505050565b6000818152600260205260409020546060906001600160a01b0316610db25760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b606482015260840161055c565b6000610dbc61151d565b90506000815111610ddc5760405180602001604052806000815250610e07565b80610de68461152c565b604051602001610df7929190611e11565b6040516020818303038152906040525b9392505050565b600a546001600160a01b03163314610e2557600080fd5b8351610e389060009060208701906119da565b508251610e4c9060019060208601906119da565b508151610e6090600b9060208501906119da565b508051610e7490600c9060208401906119da565b508351602080860191909120835184830120604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f94810194909452830191909152606082015246608082018190523060a08301529060c00160408051601f198184030181529190528051602090910120600e555050505050565b60006001600160e01b0319821663780e9d6360e01b148061044f575061044f8261162a565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610f4b8261094f565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6001600160a01b038216610fda5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161055c565b6000818152600260205260409020546001600160a01b03161561103f5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161055c565b61104b6000838361167a565b6001600160a01b0382166000908152600360205260408120805460019290611074908490611f4c565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000818152600260205260408120546001600160a01b031661114b5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161055c565b60006111568361094f565b9050806001600160a01b0316846001600160a01b031614806111915750836001600160a01b0316611186846104e7565b6001600160a01b0316145b806111c157506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166111dc8261094f565b6001600160a01b0316146112445760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b606482015260840161055c565b6001600160a01b0382166112a65760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161055c565b6112b183838361167a565b6112bc600082610f16565b6001600160a01b03831660009081526003602052604081208054600192906112e5908490611f78565b90915550506001600160a01b0382166000908152600360205260408120805460019290611313908490611f4c565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600061137f8261094f565b905061138d8160008461167a565b611398600083610f16565b6001600160a01b03811660009081526003602052604081208054600192906113c1908490611f78565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b816001600160a01b0316836001600160a01b0316141561147d5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161055c565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6114f58484846111c9565b61150184848484611685565b610d2d5760405162461bcd60e51b815260040161055c90611ea9565b6060600c805461046490611fbb565b6060816115505750506040805180820190915260018152600360fc1b602082015290565b8160005b811561157a578061156481611ff6565b91506115739050600a83611f64565b9150611554565b60008167ffffffffffffffff8111156115955761159561207d565b6040519080825280601f01601f1916602001820160405280156115bf576020820181803683370190505b5090505b84156111c1576115d4600183611f78565b91506115e1600a86612011565b6115ec906030611f4c565b60f81b81838151811061160157611601612067565b60200101906001600160f81b031916908160001a905350611623600a86611f64565b94506115c3565b60006001600160e01b031982166380ac58cd60e01b148061165b57506001600160e01b03198216635b5e139f60e01b145b8061044f57506301ffc9a760e01b6001600160e01b031983161461044f565b610692838383611792565b60006001600160a01b0384163b1561178757604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906116c9903390899088908890600401611e40565b602060405180830381600087803b1580156116e357600080fd5b505af1925050508015611713575060408051601f3d908101601f1916820190925261171091810190611d0e565b60015b61176d573d808015611741576040519150601f19603f3d011682016040523d82523d6000602084013e611746565b606091505b5080516117655760405162461bcd60e51b815260040161055c90611ea9565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506111c1565b506001949350505050565b6001600160a01b0383166117ed576117e881600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611810565b816001600160a01b0316836001600160a01b03161461181057611810838261184a565b6001600160a01b03821661182757610692816118e7565b826001600160a01b0316826001600160a01b031614610692576106928282611996565b60006001611857846109d3565b6118619190611f78565b6000838152600760205260409020549091508082146118b4576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b6008546000906118f990600190611f78565b6000838152600960205260408120546008805493945090928490811061192157611921612067565b90600052602060002001549050806008838154811061194257611942612067565b600091825260208083209091019290925582815260099091526040808220849055858252812055600880548061197a5761197a612051565b6001900381819060005260206000200160009055905550505050565b60006119a1836109d3565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b8280546119e690611fbb565b90600052602060002090601f016020900481019282611a085760008555611a4e565b82601f10611a2157805160ff1916838001178555611a4e565b82800160010185558215611a4e579182015b82811115611a4e578251825591602001919060010190611a33565b50611a5a929150611a5e565b5090565b5b80821115611a5a5760008155600101611a5f565b600067ffffffffffffffff80841115611a8e57611a8e61207d565b604051601f8501601f19908116603f01168101908282118183101715611ab657611ab661207d565b81604052809350858152868686011115611acf57600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b0381168114611b0057600080fd5b919050565b600082601f830112611b1657600080fd5b610e0783833560208501611a73565b600060208284031215611b3757600080fd5b610e0782611ae9565b60008060408385031215611b5357600080fd5b611b5c83611ae9565b9150611b6a60208401611ae9565b90509250929050565b600080600060608486031215611b8857600080fd5b611b9184611ae9565b9250611b9f60208501611ae9565b9150604084013590509250925092565b60008060008060808587031215611bc557600080fd5b611bce85611ae9565b9350611bdc60208601611ae9565b925060408501359150606085013567ffffffffffffffff811115611bff57600080fd5b8501601f81018713611c1057600080fd5b611c1f87823560208401611a73565b91505092959194509250565b60008060408385031215611c3e57600080fd5b611c4783611ae9565b915060208301358015158114611c5c57600080fd5b809150509250929050565b60008060408385031215611c7a57600080fd5b611c8383611ae9565b946020939093013593505050565b60008060008060008060c08789031215611caa57600080fd5b611cb387611ae9565b95506020870135945060408701359350606087013560ff81168114611cd757600080fd5b9598949750929560808101359460a0909101359350915050565b600060208284031215611d0357600080fd5b8135610e0781612093565b600060208284031215611d2057600080fd5b8151610e0781612093565b60008060008060808587031215611d4157600080fd5b843567ffffffffffffffff80821115611d5957600080fd5b611d6588838901611b05565b95506020870135915080821115611d7b57600080fd5b611d8788838901611b05565b94506040870135915080821115611d9d57600080fd5b611da988838901611b05565b93506060870135915080821115611dbf57600080fd5b50611c1f87828801611b05565b600060208284031215611dde57600080fd5b5035919050565b60008151808452611dfd816020860160208601611f8f565b601f01601f19169290920160200192915050565b60008351611e23818460208801611f8f565b835190830190611e37818360208801611f8f565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611e7390830184611de5565b9695505050505050565b8281526040602082015260006111c16040830184611de5565b602081526000610e076020830184611de5565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611f5f57611f5f612025565b500190565b600082611f7357611f7361203b565b500490565b600082821015611f8a57611f8a612025565b500390565b60005b83811015611faa578181015183820152602001611f92565b83811115610d2d5750506000910152565b600181811c90821680611fcf57607f821691505b60208210811415611ff057634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561200a5761200a612025565b5060010190565b6000826120205761202061203b565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146107ea57600080fdfea2646970667358221220a974fb8a4ad2efa24bf0628903ea40e895f176fe12940d77bfe678a160aa673b64736f6c63430008050033";