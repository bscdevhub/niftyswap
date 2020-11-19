/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NiftyswapFactory } from "../NiftyswapFactory";

export class NiftyswapFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<NiftyswapFactory> {
    return super.deploy(overrides || {}) as Promise<NiftyswapFactory>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NiftyswapFactory {
    return super.attach(address) as NiftyswapFactory;
  }
  connect(signer: Signer): NiftyswapFactory__factory {
    return super.connect(signer) as NiftyswapFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NiftyswapFactory {
    return new Contract(address, _abi, signerOrProvider) as NiftyswapFactory;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "currencyID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "exchange",
        type: "address",
      },
    ],
    name: "NewExchange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_currencyID",
        type: "uint256",
      },
    ],
    name: "createExchange",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokensToExchange",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50614829806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631427474c1461003b5780638359289c1461008d575b600080fd5b6100716004803603606081101561005157600080fd5b506001600160a01b038135811691602081013590911690604001356100c5565b604080516001600160a01b039092168252519081900360200190f35b6100c3600480360360608110156100a357600080fd5b506001600160a01b038135811691602081013590911690604001356100f0565b005b600060208181529381526040808220855292815282812090935282529020546001600160a01b031681565b6001600160a01b0383811660009081526020818152604080832086851684528252808320858452909152902054161561015a5760405162461bcd60e51b81526004018080602001828103825260398152602001806147bb6039913960400191505060405180910390fd5b600083838360405161016b90610233565b80846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050604051809103906000f0801580156101b1573d6000803e3d6000fd5b506001600160a01b0385811660008181526020818152604080832089861680855290835281842089855283529281902080546001600160a01b0319169587169586179055805194855251949550869491937f23658fa6d505b3e3034045b3937d4239cbdaa345bfb0c4a2d6637ade8b85457c929081900390910190a450505050565b61457a806102418339019056fe60806040523480156200001157600080fd5b506040516200457a3803806200457a83398101604081905262000034916200011f565b6000805460ff191660011790556001600160a01b038316158015906200006257506001600160a01b03821615155b6200008a5760405162461bcd60e51b815260040162000081906200015f565b60405180910390fd5b600580546001600160a01b03199081163317909155600380546001600160a01b03868116918416821790925560048054928616929093168217909255600683905514620000d9576000620000dc565b60015b60048054911515600160a01b0260ff60a01b1990921691909117905550620001aa915050565b80516001600160a01b03811681146200011a57600080fd5b919050565b60008060006060848603121562000134578283fd5b6200013f8462000102565b92506200014f6020850162000102565b9150604084015190509250925092565b6020808252602b908201527f4e696674797377617045786368616e676523636f6e7374727563746f723a494e60408201526a159053125117d25394155560aa1b606082015260800190565b6143c080620001ba6000396000f3fe608060405234801561001057600080fd5b50600436106101155760003560e01c8063863ed300116100a2578063be57146811610071578063be57146814610266578063e985e9c514610279578063f23a6e611461028c578063f242432a1461029f578063fca16c3b146102b257610115565b8063863ed30014610218578063a22cb4651461022b578063a9c2e36c1461023e578063bc197c811461024657610115565b80632bef5e38116100e95780632bef5e38146101b45780632eb2c2d6146101c757806346adf5ca146101dc5780634e1273f4146101f25780636ee8e1341461020557610115565b8062fdd58e1461013657806301ffc9a71461015f57806310fe9ae81461017f578063209b96c514610194575b60405162461bcd60e51b815260040161012d90613cb9565b60405180910390fd5b6101496101443660046130b4565b6102c5565b60405161015691906140a5565b60405180910390f35b61017261016d366004613282565b6102f0565b60405161015691906137bc565b610187610344565b60405161015691906135d6565b6101a76101a23660046131a1565b610353565b6040516101569190613770565b6101a76101c23660046131a1565b6103f3565b6101da6101d5366004612f74565b61048a565b005b6101e4610547565b6040516101569291906136f7565b6101a76102003660046130df565b61055b565b610149610213366004613571565b610673565b6101a76102263660046131e0565b6106ed565b6101da610239366004613083565b610842565b6101876108b0565b610259610254366004612f74565b6108bf565b60405161015691906137c7565b6101a76102743660046131e0565b610cbc565b610172610287366004612f3c565b610e06565b61025961029a36600461301d565b610e34565b6101da6102ad36600461301d565b610f01565b6101496102c0366004613571565b610fb7565b6001600160a01b03821660009081526001602090815260408083208484529091529020545b92915050565b60006001600160e01b031982166301ffc9a760e01b148061032157506001600160e01b03198216636cdb3d1360e11b145b8061033c57506001600160e01b03198216630271189760e51b145b90505b919050565b6003546001600160a01b031690565b60608181816001600160401b038111801561036d57600080fd5b50604051908082528060200260200182016040528015610397578160200160208202803683370190505b50905060005b828110156103ea57600860008787848181106103b557fe5b905060200201358152602001908152602001600020548282815181106103d757fe5b602090810291909101015260010161039d565b50949350505050565b60608181816001600160401b038111801561040d57600080fd5b50604051908082528060200260200182016040528015610437578160200160208202803683370190505b50905060005b828110156103ea576007600087878481811061045557fe5b9050602002013581526020019081526020016000205482828151811061047757fe5b602090810291909101015260010161043d565b336001600160a01b03861614806104a657506104a68533610e06565b6104e15760405162461bcd60e51b815260040180806020018281038252602f8152602001806142b3602f913960400191505060405180910390fd5b6001600160a01b0384166105265760405162461bcd60e51b81526004018080602001828103825260308152602001806142076030913960400191505060405180910390fd5b6105328585858561101c565b610540858585855a866112b7565b5050505050565b6004546006546001600160a01b0390911691565b6060815183511461059d5760405162461bcd60e51b815260040180806020018281038252602c815260200180614267602c913960400191505060405180910390fd5b606083516001600160401b03811180156105b657600080fd5b506040519080825280602002602001820160405280156105e0578160200160208202803683370190505b50905060005b845181101561066b57600160008683815181106105ff57fe5b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020600085838151811061063557fe5b602002602001015181526020019081526020016000205482828151811061065857fe5b60209081029190910101526001016105e6565b509392505050565b600080831180156106845750600082115b6106a05760405162461bcd60e51b815260040161012d90613fb3565b60006106ae856103e36114af565b905060006106bc82856114af565b905060006106d6836106d0886103e86114af565b9061151e565b90508082816106e157fe5b04979650505050505050565b60608381816001600160401b038111801561070757600080fd5b50604051908082528060200260200182016040528015610731578160200160208202803683370190505b50905060005b82811015610837576003546000906001600160a01b031662fdd58e308b8b8681811061075f57fe5b905060200201356040518363ffffffff1660e01b81526004016107839291906136f7565b60206040518083038186803b15801561079b57600080fd5b505afa1580156107af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d39190613559565b90506108178787848181106107e457fe5b9050602002013582600860008d8d888181106107fc57fe5b90506020020135815260200190815260200160002054610673565b83838151811061082357fe5b602090810291909101015250600101610737565b509695505050505050565b3360008181526002602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6005546001600160a01b031690565b600080828060200190518101906108d6919061329e565b90506001600160e01b0319811663b2d8104760e01b1415610a3f576004546001600160a01b0316331461091b5760405162461bcd60e51b815260040161012d9061404b565b845160011461093c5760405162461bcd60e51b815260040161012d9061395e565b6006548560008151811061094c57fe5b6020026020010151146109715760405162461bcd60e51b815260040161012d906138bc565b610979612d28565b8380602001905181019061098d9190613352565b8051909250600091506001600160a01b0316156109ab5781516109ad565b875b905060606109de83602001518460400151896000815181106109cb57fe5b6020026020010151866060015186611571565b9050816001600160a01b0316896001600160a01b03167fd38bc77e62e239476b3e25620d73f29a4a188e808aad79f4a81aaf44871a7a308560200151866040015185604051610a2f93929190613783565b60405180910390a3505050610ca9565b6001600160e01b0319811663db08ec9760e01b1415610b20576003546001600160a01b03163314610a825760405162461bcd60e51b815260040161012d90613b2a565b610a8a612d59565b83806020019051810190610a9e91906134d9565b8051909250600091506001600160a01b031615610abc578151610abe565b875b90506060610ad78888856020015186604001518661184b565b9050816001600160a01b0316896001600160a01b03167f89e4dbdd48f69e7920342e9ad9691b9a7150f254e6a0af177ccfd2556aab8bcd8a8a85604051610a2f93929190613783565b6001600160e01b031981166382da2b7360e01b1415610ba0576003546001600160a01b03163314610b635760405162461bcd60e51b815260040161012d90613907565b610b6b612d83565b83806020019051810190610b7f91906132ba565b905080915050610b9a87878784600001518560200151611a95565b50610ca9565b6001600160e01b03198116635c0bf25960e01b1415610c1457333014610bd85760405162461bcd60e51b815260040161012d90613c18565b610be0612d9d565b83806020019051810190610bf4919061341e565b905080915050610b9a878787846000015185602001518660400151611fbf565b6001600160e01b0319811663c8c323f960e01b1415610c91576004546001600160a01b03163314610c575760405162461bcd60e51b815260040161012d906139b7565b60065485600081518110610c6757fe5b602002602001015114610c8c5760405162461bcd60e51b815260040161012d906138bc565b610ca9565b60405162461bcd60e51b815260040161012d90614000565b5063bc197c8160e01b9695505050505050565b60608381816001600160401b0381118015610cd657600080fd5b50604051908082528060200260200182016040528015610d00578160200160208202803683370190505b50905060005b82811015610837576003546000906001600160a01b031662fdd58e308b8b86818110610d2e57fe5b905060200201356040518363ffffffff1660e01b8152600401610d529291906136f7565b60206040518083038186803b158015610d6a57600080fd5b505afa158015610d7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da29190613559565b9050610de6878784818110610db357fe5b90506020020135600860008c8c87818110610dca57fe5b9050602002013581526020019081526020016000205483610fb7565b838381518110610df257fe5b602090810291909101015250600101610d06565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b604080516001808252818301909252600091606091906020808301908036833750506040805160018082528183019092529293506060929150602080830190803683370190505090508582600081518110610e8b57fe5b6020026020010181815250508481600081518110610ea557fe5b602002602001018181525050610ebe88888484886108bf565b6001600160e01b03191663bc197c8160e01b14610eed5760405162461bcd60e51b815260040161012d90613cfd565b5063f23a6e6160e01b979650505050505050565b336001600160a01b0386161480610f1d5750610f1d8533610e06565b610f585760405162461bcd60e51b815260040180806020018281038252602a815260200180614168602a913960400191505060405180910390fd5b6001600160a01b038416610f9d5760405162461bcd60e51b815260040180806020018281038252602b81526020018061411d602b913960400191505060405180910390fd5b610fa985858585612408565b610540858585855a866124e9565b60008083118015610fc85750600082115b610fe45760405162461bcd60e51b815260040161012d90613f67565b6000610ffc6103e8610ff686886114af565b906114af565b905060006110106103e3610ff6868961265b565b905061083782826126b8565b805182511461105c5760405162461bcd60e51b81526004018080602001828103825260358152602001806141926035913960400191505060405180910390fd5b815160005b818110156111d6576110d883828151811061107857fe5b602002602001015160016000896001600160a01b03166001600160a01b0316815260200190815260200160002060008785815181106110b357fe5b602002602001015181526020019081526020016000205461265b90919063ffffffff16565b6001600160a01b0387166000908152600160205260408120865190919087908590811061110157fe5b602002602001015181526020019081526020016000208190555061118a83828151811061112a57fe5b602002602001015160016000886001600160a01b03166001600160a01b03168152602001908152602001600020600087858151811061116557fe5b602002602001015181526020019081526020016000205461151e90919063ffffffff16565b6001600160a01b038616600090815260016020526040812086519091908790859081106111b357fe5b602090810291909101810151825281019190915260400160002055600101611061565b50836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561125c578181015183820152602001611244565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561129b578181015183820152602001611283565b5050505090500194505050505060405180910390a45050505050565b6112c9856001600160a01b03166126ff565b156114a7576000856001600160a01b031663bc197c8184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561135a578181015183820152602001611342565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015611399578181015183820152602001611381565b50505050905001848103825285818151815260200191508051906020019080838360005b838110156113d55781810151838201526020016113bd565b50505050905090810190601f1680156114025780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b15801561142757600080fd5b5087f115801561143b573d6000803e3d6000fd5b50505050506040513d602081101561145257600080fd5b505190506001600160e01b0319811663bc197c8160e01b146114a55760405162461bcd60e51b815260040180806020018281038252603f815260200180614312603f913960400191505060405180910390fd5b505b505050505050565b6000826114be575060006102ea565b828202828482816114cb57fe5b0414611517576040805162461bcd60e51b8152602060048201526016602482015275536166654d617468236d756c3a204f564552464c4f5760501b604482015290519081900360640190fd5b9392505050565b600082820183811015611517576040805162461bcd60e51b8152602060048201526016602482015275536166654d617468236164643a204f564552464c4f5760501b604482015290519081900360640190fd5b60005460609060ff166115b9576040805162461bcd60e51b815260206004820152601f6024820152600080516020614148833981519152604482015290519081900360640190fd5b6000805460ff19169055428310156115e35760405162461bcd60e51b815260040161012d90613867565b855184816001600160401b03811180156115fc57600080fd5b50604051908082528060200260200182016040528015611626578160200160208202803683370190505b5092506060826001600160401b038111801561164157600080fd5b5060405190808252806020026020018201604052801561166b578160200160208202803683370190505b50905061167789612736565b905060005b8381101561175a5760008a828151811061169257fe5b6020026020010151905060008a83815181106116aa57fe5b6020026020010151905060008484815181106116c257fe5b60200260200101519050600082116116ec5760405162461bcd60e51b815260040161012d90613da6565b60008381526008602052604081205490611707848385610fb7565b9050611713888261265b565b9750808a878151811061172257fe5b6020908102919091010152611737828261151e565b6000958652600860205260409095209490945550506001909201915061167c9050565b5081156117ca5760048054600654604051637921219560e11b81526001600160a01b039092169263f242432a926117979230928b928991016136bf565b600060405180830381600087803b1580156117b157600080fd5b505af11580156117c5573d6000803e3d6000fd5b505050505b600354604051631759616b60e11b81526001600160a01b0390911690632eb2c2d69061180090309089908e908e906004016135ea565b600060405180830381600087803b15801561181a57600080fd5b505af115801561182e573d6000803e3d6000fd5b505050505050506000805460ff1916600117905595945050505050565b60005460609060ff16611893576040805162461bcd60e51b815260206004820152601f6024820152600080516020614148833981519152604482015290519081900360640190fd5b6000805460ff191690558551428410156118bf5760405162461bcd60e51b815260040161012d90613a0d565b6000816001600160401b03811180156118d757600080fd5b50604051908082528060200260200182016040528015611901578160200160208202803683370190505b5092506060826001600160401b038111801561191c57600080fd5b50604051908082528060200260200182016040528015611946578160200160208202803683370190505b50905061195289612736565b905060005b83811015611a3e5760008a828151811061196d57fe5b6020026020010151905060008a838151811061198557fe5b60200260200101519050600084848151811061199d57fe5b60200260200101519050600082116119c75760405162461bcd60e51b815260040161012d90613f13565b600083815260086020526040812054906119eb846119e5858261265b565b84610673565b90506119f7888261151e565b9750611a03828261265b565b600086815260086020526040902055895181908b9088908110611a2257fe5b6020908102919091010152505060019093019250611957915050565b5086821015611a5f5760405162461bcd60e51b815260040161012d90613a62565b60048054600654604051637921219560e11b81526001600160a01b039092169263f242432a926118009230928b928991016136bf565b60005460ff16611ada576040805162461bcd60e51b815260206004820152601f6024820152600080516020614148833981519152604482015290519081900360640190fd5b6000805460ff1916905542811015611b045760405162461bcd60e51b815260040161012d90613dfc565b835160006060826001600160401b0381118015611b2057600080fd5b50604051908082528060200260200182016040528015611b4a578160200160208202803683370190505b5090506060836001600160401b0381118015611b6557600080fd5b50604051908082528060200260200182016040528015611b8f578160200160208202803683370190505b5090506060846001600160401b0381118015611baa57600080fd5b50604051908082528060200260200182016040528015611bd4578160200160208202803683370190505b509050611be089612736565b905060005b85811015611ead5760008a8281518110611bfb57fe5b6020026020010151905060008a8381518110611c1357fe5b6020026020010151905060008a8481518110611c2b57fe5b602002602001015111611c505760405162461bcd60e51b815260040161012d906137dc565b60008111611c705760405162461bcd60e51b815260040161012d90613ed2565b600454600160a01b900460ff1615611ca457600654821415611ca45760405162461bcd60e51b815260040161012d90613e3c565b6000828152600760205260409020548015611e00576000838152600860205260408120548651909190879087908110611cd957fe5b60200260200101519050600080611d0b611cfc85886114af90919063ffffffff16565b611d06858961265b565b6126b8565b91509150818f8981518110611d1c57fe5b60200260200101511015611d425760405162461bcd60e51b815260040161012d90613bcd565b611d4c848361151e565b600088815260086020526040902055611d658c8361151e565b9b5083611d8886610ff684611d7b576000611d7e565b60015b869060ff1661265b565b81611d8f57fe5b048b8981518110611d9c57fe5b602002602001018181525050818a8981518110611db557fe5b602002602001018181525050611de78b8981518110611dd057fe5b60200260200101518661151e90919063ffffffff16565b60008881526007602052604090205550611ea292505050565b60008b8581518110611e0e57fe5b60200260200101519050633b9aca00811015611e3c5760405162461bcd60e51b815260040161012d90613b82565b6000848152600860205260409020819055611e57898261151e565b600085815260076020526040902082905588519099508190899087908110611e7b57fe5b60200260200101818152505080878681518110611e9457fe5b602002602001018181525050505b505050600101611be5565b50611ec98a8a8560405180602001604052806000815250612998565b6004546006546040516001600160a01b039092169163f242432a918d913091908990611f009063c8c323f960e01b906020016137c7565b6040516020818303038152906040526040518663ffffffff1660e01b8152600401611f2f959493929190613642565b600060405180830381600087803b158015611f4957600080fd5b505af1158015611f5d573d6000803e3d6000fd5b50505050896001600160a01b03167f403f9dc4582dae52d3eeb4a22d37540ffb13c32d964c92ec5ac0d3d5628da3168a8a85604051611f9e93929190613783565b60405180910390a250506000805460ff191660011790555050505050505050565b60005460ff16612004576040805162461bcd60e51b815260206004820152601f6024820152600080516020614148833981519152604482015290519081900360640190fd5b6000805460ff1916905542811161202d5760405162461bcd60e51b815260040161012d90613c76565b845160006060826001600160401b038111801561204957600080fd5b50604051908082528060200260200182016040528015612073578160200160208202803683370190505b5090506060836001600160401b038111801561208e57600080fd5b506040519080825280602002602001820160405280156120b8578160200160208202803683370190505b5090506060846001600160401b03811180156120d357600080fd5b506040519080825280602002602001820160405280156120fd578160200160208202803683370190505b5090506121098a612736565b905060005b858110156122ba5760008b828151811061212457fe5b6020026020010151905060008b838151811061213c57fe5b60200260200101519050600084848151811061215457fe5b60200260200101519050600060076000858152602001908152602001600020549050600081116121965760405162461bcd60e51b815260040161012d9061381c565b60008481526008602052604081205490826121b186846114af565b816121b857fe5b0490506000836121c887876114af565b816121cf57fe5b0490508f88815181106121de57fe5b60200260200101518210156122055760405162461bcd60e51b815260040161012d90613d5a565b8e888151811061221157fe5b60200260200101518110156122385760405162461bcd60e51b815260040161012d90613e87565b612242848761265b565b60008881526007602052604090205561225b838361265b565b6000888152600860205260409020556122748c8361151e565b9b50808b898151811061228357fe5b602002602001018181525050818a898151811061229c57fe5b602090810291909101015250506001909501945061210e9350505050565b506122c6308b8b612b65565b600460009054906101000a90046001600160a01b03166001600160a01b031663f242432a308d600654886040518563ffffffff1660e01b815260040161230f94939291906136bf565b600060405180830381600087803b15801561232957600080fd5b505af115801561233d573d6000803e3d6000fd5b5050600354604051631759616b60e11b81526001600160a01b039091169250632eb2c2d691506123779030908f908f9089906004016135ea565b600060405180830381600087803b15801561239157600080fd5b505af11580156123a5573d6000803e3d6000fd5b505050508a6001600160a01b03167f711e9bcb94b4cf7bc99c1cb938edc75ac7e85a136838e90abf6ee1f5adebd4238b85856040516123e693929190613783565b60405180910390a250506000805460ff19166001179055505050505050505050565b6001600160a01b0384166000908152600160209081526040808320858452909152902054612436908261265b565b6001600160a01b03808616600090815260016020818152604080842088855282528084209590955592871682528252828120858252909152205461247a908261151e565b6001600160a01b038085166000818152600160209081526040808320888452825291829020949094558051868152938401859052805191939288169233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a450505050565b6124fb856001600160a01b03166126ff565b156114a7576000856001600160a01b031663f23a6e6184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561258d578181015183820152602001612575565b50505050905090810190601f1680156125ba5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b1580156125dd57600080fd5b5087f11580156125f1573d6000803e3d6000fd5b50505050506040513d602081101561260857600080fd5b505190506001600160e01b0319811663f23a6e6160e01b146114a55760405162461bcd60e51b815260040180806020018281038252603a815260200180614351603a913960400191505060405180910390fd5b6000828211156126b2576040805162461bcd60e51b815260206004820152601760248201527f536166654d617468237375623a20554e444552464c4f57000000000000000000604482015290519081900360640190fd5b50900390565b6000808284816126c457fe5b06156126e6576126df60018486816126d857fe5b049061151e565b60016126f3565b8284816126ef57fe5b0460005b915091505b9250929050565b6000813f801580159061151757507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141592915050565b8051606090600181141561281d5760408051600180825281830190925260609160208083019080368337505060035486519293506001600160a01b03169162fdd58e91503090879060009061278757fe5b60200260200101516040518363ffffffff1660e01b81526004016127ac9291906136f7565b60206040518083038186803b1580156127c457600080fd5b505afa1580156127d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127fc9190613559565b8160008151811061280957fe5b6020908102919091010152915061033f9050565b6060816001600160401b038111801561283557600080fd5b5060405190808252806020026020018201604052801561285f578160200160208202803683370190505b509050308160008151811061287057fe5b6001600160a01b039092166020928302919091019091015260015b828110156129085784818151811061289f57fe5b60200260200101518560018303815181106128b657fe5b6020026020010151106128db5760405162461bcd60e51b815260040161012d90613ac0565b308282815181106128e857fe5b6001600160a01b039092166020928302919091019091015260010161288b565b506003546040516313849cfd60e21b81526001600160a01b0390911690634e1273f49061293b9084908890600401613710565b60006040518083038186803b15801561295357600080fd5b505afa158015612967573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261298f9190810190613248565b9250505061033f565b81518351146129d85760405162461bcd60e51b81526004018080602001828103825260308152602001806142e26030913960400191505060405180910390fd5b825160005b81811015612a7b57612a2f8482815181106129f457fe5b602002602001015160016000896001600160a01b03166001600160a01b03168152602001908152602001600020600088858151811061116557fe5b6001600160a01b03871660009081526001602052604081208751909190889085908110612a5857fe5b6020908102919091018101518252810191909152604001600020556001016129dd565b50846001600160a01b031660006001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015612b02578181015183820152602001612aea565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015612b41578181015183820152602001612b29565b5050505090500194505050505060405180910390a461054060008686865a876112b7565b815181518114612ba65760405162461bcd60e51b81526004018080602001828103825260308152602001806142376030913960400191505060405180910390fd5b60005b81811015612c4757612bfb838281518110612bc057fe5b602002602001015160016000886001600160a01b03166001600160a01b0316815260200190815260200160002060008785815181106110b357fe5b6001600160a01b03861660009081526001602052604081208651909190879085908110612c2457fe5b602090810291909101810151825281019190915260400160002055600101612ba9565b5060006001600160a01b0316846001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015612cce578181015183820152602001612cb6565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015612d0d578181015183820152602001612cf5565b5050505090500194505050505060405180910390a450505050565b604051806080016040528060006001600160a01b031681526020016060815260200160608152602001600081525090565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b604051806040016040528060608152602001600081525090565b60405180606001604052806060815260200160608152602001600081525090565b805161033f816140ee565b60008083601f840112612dda578081fd5b5081356001600160401b03811115612df0578182fd5b60208301915083602080830285010111156126f857600080fd5b600082601f830112612e1a578081fd5b8135612e2d612e28826140d1565b6140ae565b818152915060208083019084810181840286018201871015612e4e57600080fd5b60005b84811015612e6d57813584529282019290820190600101612e51565b505050505092915050565b600082601f830112612e88578081fd5b8151612e96612e28826140d1565b818152915060208083019084810181840286018201871015612eb757600080fd5b60005b84811015612e6d57815184529282019290820190600101612eba565b600082601f830112612ee6578081fd5b81356001600160401b03811115612ef957fe5b612f0c601f8201601f19166020016140ae565b9150808252836020828501011115612f2357600080fd5b8060208401602084013760009082016020015292915050565b60008060408385031215612f4e578182fd5b8235612f59816140ee565b91506020830135612f69816140ee565b809150509250929050565b600080600080600060a08688031215612f8b578081fd5b8535612f96816140ee565b94506020860135612fa6816140ee565b935060408601356001600160401b0380821115612fc1578283fd5b612fcd89838a01612e0a565b94506060880135915080821115612fe2578283fd5b612fee89838a01612e0a565b93506080880135915080821115613003578283fd5b5061301088828901612ed6565b9150509295509295909350565b600080600080600060a08688031215613034578081fd5b853561303f816140ee565b9450602086013561304f816140ee565b9350604086013592506060860135915060808601356001600160401b03811115613077578182fd5b61301088828901612ed6565b60008060408385031215613095578182fd5b82356130a0816140ee565b915060208301358015158114612f69578182fd5b600080604083850312156130c6578182fd5b82356130d1816140ee565b946020939093013593505050565b600080604083850312156130f1578182fd5b82356001600160401b0380821115613107578384fd5b818501915085601f83011261311a578384fd5b8135613128612e28826140d1565b80828252602080830192508086018a828387028901011115613148578889fd5b8896505b8487101561317357803561315f816140ee565b84526001969096019592810192810161314c565b50909650870135935050508082111561318a578283fd5b5061319785828601612e0a565b9150509250929050565b600080602083850312156131b3578182fd5b82356001600160401b038111156131c8578283fd5b6131d485828601612dc9565b90969095509350505050565b600080600080604085870312156131f5578182fd5b84356001600160401b038082111561320b578384fd5b61321788838901612dc9565b9096509450602087013591508082111561322f578384fd5b5061323c87828801612dc9565b95989497509550505050565b600060208284031215613259578081fd5b81516001600160401b0381111561326e578182fd5b61327a84828501612e78565b949350505050565b600060208284031215613293578081fd5b813561151781614106565b6000602082840312156132af578081fd5b815161151781614106565b600080604083850312156132cc578182fd5b82516132d781614106565b60208401519092506001600160401b03808211156132f3578283fd5b9084019060408287031215613306578283fd5b60405160408101818110838211171561331b57fe5b60405282518281111561332c578485fd5b61333888828601612e78565b825250602083015160208201528093505050509250929050565b60008060408385031215613364578182fd5b825161336f81614106565b60208401519092506001600160401b038082111561338b578283fd5b908401906080828703121561339e578283fd5b6040516080810181811083821117156133b357fe5b6040526133bf83612dbe565b81526020830151828111156133d2578485fd5b6133de88828601612e78565b6020830152506040830151828111156133f5578485fd5b61340188828601612e78565b604083015250606083015160608201528093505050509250929050565b60008060408385031215613430578182fd5b825161343b81614106565b60208401519092506001600160401b0380821115613457578283fd5b908401906060828703121561346a578283fd5b60405160608101818110838211171561347f57fe5b604052825182811115613490578485fd5b61349c88828601612e78565b8252506020830151828111156134b0578485fd5b6134bc88828601612e78565b602083015250604083015160408201528093505050509250929050565b60008082840360808112156134ec578283fd5b83516134f781614106565b92506060601f198201121561350a578182fd5b50604051606081018181106001600160401b038211171561352757fe5b6040526020840151613538816140ee565b81526040848101516020830152606090940151938101939093525092909150565b60006020828403121561356a578081fd5b5051919050565b600080600060608486031215613585578081fd5b505081359360208301359350604090920135919050565b6000815180845260208085019450808401835b838110156135cb578151875295820195908201906001016135af565b509495945050505050565b6001600160a01b0391909116815260200190565b6001600160a01b0385811682528416602082015260a0604082018190526000906136169083018561359c565b8281036060840152613628818561359c565b838103608090940193909352508152602001949350505050565b600060018060a01b03808816835260208188168185015286604085015285606085015260a06080850152845191508160a0850152825b828110156136945785810182015185820160c001528101613678565b828111156136a5578360c084870101525b5050601f01601f19169190910160c0019695505050505050565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b6001600160a01b03929092168252602082015260400190565b604080825283519082018190526000906020906060840190828701845b828110156137525781516001600160a01b03168452928401929084019060010161372d565b50505083810382850152613766818661359c565b9695505050505050565b600060208252611517602083018461359c565b600060608252613796606083018661359c565b82810360208401526137a8818661359c565b90508281036040840152613766818561359c565b901515815260200190565b6001600160e01b031991909116815260200190565b60208082526032908201526000805160206141e7833981519152604082015271204e554c4c5f4d41585f43555252454e435960701b606082015260800190565b60208082526038908201526000805160206141c783398151915260408201527f74793a204e554c4c5f544f54414c5f4c49515549444954590000000000000000606082015260800190565b60208082526035908201527f4e696674797377617045786368616e6765235f63757272656e6379546f546f6b604082015274195b8e88111150511312539157d15610d151511151605a1b606082015260800190565b6020808252603d9082015260008051602061429383398151915260408201527f52656365697665643a20494e56414c49445f43555252454e43595f4944000000606082015260800190565b602080825260439082015260008051602061429383398151915260408201527f52656365697665643a20494e56414c49445f544f4b454e5f5452414e5346455260608201526214915160ea1b608082015260a00190565b602080825260459082015260008051602061429383398151915260408201527f52656365697665643a20494e56414c49445f43555252454e43595f4944535f416060820152641353d5539560da1b608082015260a00190565b602080825260429082015260008051602061429383398151915260408201527f52656365697665643a20494e56414c49445f544f4b454e535f4445504f534954606082015261115160f21b608082015260a00190565b60208082526035908201527f4e696674797377617045786368616e6765235f746f6b656e546f43757272656e60408201527418de4e88111150511312539157d15610d151511151605a1b606082015260800190565b602080825260409082018190527f4e696674797377617045786368616e6765235f746f6b656e546f43757272656e908201527f63793a20494e53554646494349454e545f43555252454e43595f414d4f554e54606082015260800190565b60208082526044908201527f4e696674797377617045786368616e6765235f676574546f6b656e526573657260408201527f7665733a20554e534f525445445f4f525f4455504c49434154455f544f4b454e6060820152635f49445360e01b608082015260a00190565b602080825260449082015260008051602061429383398151915260408201527f52656365697665643a20494e56414c49445f544f4b454e535f5452414e5346456060820152631494915160e21b608082015260a00190565b60208082526038908201526000805160206141e783398151915260408201527f20494e56414c49445f43555252454e43595f414d4f554e540000000000000000606082015260800190565b6020808252603d908201526000805160206141e783398151915260408201527f204d41585f43555252454e43595f414d4f554e545f4558434545444544000000606082015260800190565b6020808252604a9082015260008051602061429383398151915260408201527f52656365697665643a20494e56414c49445f4e494654595f544f4b454e535f5460608201526914905394d1915494915160b21b608082015260a00190565b60208082526035908201526000805160206141c78339815191526040820152741d1e4e88111150511312539157d15610d151511151605a1b606082015260800190565b60208082526024908201527f4e696674797377617045786368616e67653a554e535550504f525445445f4d45604082015263151213d160e21b606082015260800190565b6020808252603f908201527f4e696674797377617045786368616e6765236f6e45524331313535526563656960408201527f7665643a20494e56414c49445f4f4e52454345495645445f4d45535341474500606082015260800190565b602080825260409082018190526000805160206141c7833981519152908201527f74793a20494e53554646494349454e545f43555252454e43595f414d4f554e54606082015260800190565b60208082526036908201527f4e696674797377617045786368616e6765235f63757272656e6379546f546f6b604082015275195b8e881395531317d513d2d15394d7d093d551d21560521b606082015260800190565b60208082526032908201526000805160206141e783398151915260408201527108111150511312539157d15610d15151115160721b606082015260800190565b60208082526038908201526000805160206141e783398151915260408201527f2043555252454e43595f504f4f4c5f464f5242494444454e0000000000000000606082015260800190565b60208082526037908201526000805160206141c783398151915260408201527f74793a20494e53554646494349454e545f544f4b454e53000000000000000000606082015260800190565b60208082526033908201526000805160206141e7833981519152604082015272081395531317d513d2d15394d7d05353d55395606a1b606082015260800190565b60208082526034908201527f4e696674797377617045786368616e6765235f746f6b656e546f43757272656e60408201527318de4e881395531317d513d2d15394d7d4d3d31160621b606082015260800190565b6020808252602c908201527f4e696674797377617045786368616e67652367657442757950726963653a204560408201526b4d5054595f5245534552564560a01b606082015260800190565b6020808252602d908201527f4e696674797377617045786368616e67652367657453656c6c50726963653a2060408201526c454d5054595f5245534552564560981b606082015260800190565b602080825260389082015260008051602061429383398151915260408201527f52656365697665643a20494e56414c49445f4d4554484f440000000000000000606082015260800190565b602080825260469082015260008051602061429383398151915260408201527f52656365697665643a20494e56414c49445f43555252454e43595f5452414e5360608201526511915494915160d21b608082015260a00190565b90815260200190565b6040518181016001600160401b03811182821017156140c957fe5b604052919050565b60006001600160401b038211156140e457fe5b5060209081020190565b6001600160a01b038116811461410357600080fd5b50565b6001600160e01b03198116811461410357600080fdfe4552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e545265656e7472616e637947756172643a207265656e7472616e742063616c6c004552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f5245524331313535235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e4754484e696674797377617045786368616e6765235f72656d6f76654c6971756964694e696674797377617045786368616e6765235f6164644c69717569646974793a45524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135354d696e744275726e2362617463684275726e3a20494e56414c49445f4152524159535f4c454e475448455243313135352362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e4754484e696674797377617045786368616e6765236f6e45524331313535426174636845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135354d696e744275726e2362617463684d696e743a20494e56414c49445f4152524159535f4c454e47544845524331313535235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d45535341474545524331313535235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745a2646970667358221220b6af7aa0231d4cadf576f77673b83ca7d54114ea06948cc7a7130292eb9af57564736f6c634300070400334e6966747973776170466163746f72792363726561746545786368616e67653a2045584348414e47455f414c52454144595f43524541544544a2646970667358221220ad86d96698659e097ee77f4bfd83d6de82ce8472ee564b0aa1c860334362fa4d64736f6c63430007040033";