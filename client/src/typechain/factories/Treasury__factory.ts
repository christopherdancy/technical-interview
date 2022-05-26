/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Treasury, TreasuryInterface } from "../Treasury";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userBalances",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506104d7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632e1a7d4d1461004657806347e7ef2414610076578063adb51980146100a6575b600080fd5b610060600480360381019061005b91906102e3565b6100d6565b60405161006d919061039a565b60405180910390f35b610090600480360381019061008b91906102a7565b61011b565b60405161009d919061039a565b60405180910390f35b6100c060048036038101906100bb919061026b565b61021c565b6040516100cd91906103bc565b60405180910390f35b606060006040518060400160405280600681526020017f706c656173650000000000000000000000000000000000000000000000000000815250905080915050919050565b6060816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060006040518060400160405280600681526020017f706c65617365000000000000000000000000000000000000000000000000000081525090507f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f6233858560405161020a93929190610363565b60405180910390a18091505092915050565b6000602052816000526040600020602052806000526040600020600091509150505481565b60008135905061025081610473565b92915050565b6000813590506102658161048a565b92915050565b6000806040838503121561027e57600080fd5b600061028c85828601610241565b925050602061029d85828601610241565b9150509250929050565b600080604083850312156102ba57600080fd5b60006102c885828601610241565b92505060206102d985828601610256565b9150509250929050565b6000602082840312156102f557600080fd5b600061030384828501610256565b91505092915050565b610315816103f3565b82525050565b6000610326826103d7565b61033081856103e2565b935061034081856020860161042f565b61034981610462565b840191505092915050565b61035d81610425565b82525050565b6000606082019050610378600083018661030c565b610385602083018561030c565b6103926040830184610354565b949350505050565b600060208201905081810360008301526103b4818461031b565b905092915050565b60006020820190506103d16000830184610354565b92915050565b600081519050919050565b600082825260208201905092915050565b60006103fe82610405565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561044d578082015181840152602081019050610432565b8381111561045c576000848401525b50505050565b6000601f19601f8301169050919050565b61047c816103f3565b811461048757600080fd5b50565b61049381610425565b811461049e57600080fd5b5056fea264697066735822122021c881de89a377562bed40c14267cf2eb29f5981817ffba6fce3bd899377af0a64736f6c63430008040033";

export class Treasury__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Treasury> {
    return super.deploy(overrides || {}) as Promise<Treasury>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Treasury {
    return super.attach(address) as Treasury;
  }
  connect(signer: Signer): Treasury__factory {
    return super.connect(signer) as Treasury__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasuryInterface {
    return new utils.Interface(_abi) as TreasuryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Treasury {
    return new Contract(address, _abi, signerOrProvider) as Treasury;
  }
}
