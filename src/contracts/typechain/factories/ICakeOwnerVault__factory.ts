/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ICakeOwnerVault } from "../ICakeOwnerVault";

export class ICakeOwnerVault__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICakeOwnerVault {
    return new Contract(address, _abi, signerOrProvider) as ICakeOwnerVault;
  }
}

const _abi = [
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
    stateMutability: "nonpayable",
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
    stateMutability: "nonpayable",
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
];
