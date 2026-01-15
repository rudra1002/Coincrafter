const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "initialSupply",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimInitialTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "sendToAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];  // Replace with the actual ABI of the MemeCoin contract
        const contractBytecode = "608060405234801562000010575f80fd5b5060405162001b5738038062001b578339818101604052810190620000369190620004f9565b82828160039081620000499190620007be565b5080600490816200005b9190620007be565b5050506200008533670de0b6b3a764000083620000799190620008cf565b6200008e60201b60201c565b50505062000a18565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000101575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401620000f891906200095c565b60405180910390fd5b620001145f83836200011860201b60201c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036200016c578060025f8282546200015f919062000977565b925050819055506200023d565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015620001f8578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401620001ef93929190620009c2565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000286578060025f8282540392505081905550620002d0565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200032f9190620009fd565b60405180910390a3505050565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6200039d8262000355565b810181811067ffffffffffffffff82111715620003bf57620003be62000365565b5b80604052505050565b5f620003d36200033c565b9050620003e1828262000392565b919050565b5f67ffffffffffffffff82111562000403576200040262000365565b5b6200040e8262000355565b9050602081019050919050565b5f5b838110156200043a5780820151818401526020810190506200041d565b5f8484015250505050565b5f6200045b6200045584620003e6565b620003c8565b9050828152602081018484840111156200047a576200047962000351565b5b620004878482856200041b565b509392505050565b5f82601f830112620004a657620004a56200034d565b5b8151620004b884826020860162000445565b91505092915050565b5f819050919050565b620004d581620004c1565b8114620004e0575f80fd5b50565b5f81519050620004f381620004ca565b92915050565b5f805f6060848603121562000513576200051262000345565b5b5f84015167ffffffffffffffff81111562000533576200053262000349565b5b62000541868287016200048f565b935050602084015167ffffffffffffffff81111562000565576200056462000349565b5b62000573868287016200048f565b92505060406200058686828701620004e3565b9150509250925092565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680620005df57607f821691505b602082108103620005f557620005f46200059a565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302620006597fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200061c565b6200066586836200061c565b95508019841693508086168417925050509392505050565b5f819050919050565b5f620006a6620006a06200069a84620004c1565b6200067d565b620004c1565b9050919050565b5f819050919050565b620006c18362000686565b620006d9620006d082620006ad565b84845462000628565b825550505050565b5f90565b620006ef620006e1565b620006fc818484620006b6565b505050565b5b818110156200072357620007175f82620006e5565b60018101905062000702565b5050565b601f82111562000772576200073c81620005fb565b62000747846200060d565b8101602085101562000757578190505b6200076f62000766856200060d565b83018262000701565b50505b505050565b5f82821c905092915050565b5f620007945f198460080262000777565b1980831691505092915050565b5f620007ae838362000783565b9150826002028217905092915050565b620007c98262000590565b67ffffffffffffffff811115620007e557620007e462000365565b5b620007f18254620005c7565b620007fe82828562000727565b5f60209050601f83116001811462000834575f84156200081f578287015190505b6200082b8582620007a1565b8655506200089a565b601f1984166200084486620005fb565b5f5b828110156200086d5784890151825560018201915060208501945060208101905062000846565b868310156200088d578489015162000889601f89168262000783565b8355505b6001600288020188555050505b505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f620008db82620004c1565b9150620008e883620004c1565b9250828202620008f881620004c1565b91508282048414831517620009125762000911620008a2565b5b5092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620009448262000919565b9050919050565b620009568162000938565b82525050565b5f602082019050620009715f8301846200094b565b92915050565b5f6200098382620004c1565b91506200099083620004c1565b9250828201905080821115620009ab57620009aa620008a2565b5b92915050565b620009bc81620004c1565b82525050565b5f606082019050620009d75f8301866200094b565b620009e66020830185620009b1565b620009f56040830184620009b1565b949350505050565b5f60208201905062000a125f830184620009b1565b92915050565b6111318062000a265f395ff3fe608060405234801561000f575f80fd5b50600436106100a7575f3560e01c80633debd2d81161006f5780633debd2d8146101655780634e70d1a91461018157806370a082311461018b57806395d89b41146101bb578063a9059cbb146101d9578063dd62ed3e14610209576100a7565b806306fdde03146100ab578063095ea7b3146100c957806318160ddd146100f957806323b872dd14610117578063313ce56714610147575b5f80fd5b6100b3610239565b6040516100c09190610c72565b60405180910390f35b6100e360048036038101906100de9190610d23565b6102c9565b6040516100f09190610d7b565b60405180910390f35b6101016102eb565b60405161010e9190610da3565b60405180910390f35b610131600480360381019061012c9190610dbc565b6102f4565b60405161013e9190610d7b565b60405180910390f35b61014f610322565b60405161015c9190610e27565b60405180910390f35b61017f600480360381019061017a9190610d23565b61032a565b005b6101896103f2565b005b6101a560048036038101906101a09190610e40565b6104ec565b6040516101b29190610da3565b60405180910390f35b6101c3610531565b6040516101d09190610c72565b60405180910390f35b6101f360048036038101906101ee9190610d23565b6105c1565b6040516102009190610d7b565b60405180910390f35b610223600480360381019061021e9190610e6b565b6105e3565b6040516102309190610da3565b60405180910390f35b60606003805461024890610ed6565b80601f016020809104026020016040519081016040528092919081815260200182805461027490610ed6565b80156102bf5780601f10610296576101008083540402835291602001916102bf565b820191905f5260205f20905b8154815290600101906020018083116102a257829003601f168201915b5050505050905090565b5f806102d3610665565b90506102e081858561066c565b600191505092915050565b5f600254905090565b5f806102fe610665565b905061030b85828561067e565b610316858585610710565b60019150509392505050565b5f6012905090565b80610334336104ec565b1015610375576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036c90610f50565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036103e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103da90610fb8565b60405180910390fd5b6103ee338383610710565b5050565b60055f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff161561047c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047390611020565b60405180910390fd5b5f68056bc75e2d631000009050600160055f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506104e9303383610710565b50565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b60606004805461054090610ed6565b80601f016020809104026020016040519081016040528092919081815260200182805461056c90610ed6565b80156105b75780601f1061058e576101008083540402835291602001916105b7565b820191905f5260205f20905b81548152906001019060200180831161059a57829003601f168201915b5050505050905090565b5f806105cb610665565b90506105d8818585610710565b600191505092915050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b5f33905090565b6106798383836001610800565b505050565b5f61068984846105e3565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461070a57818110156106fb578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016106f29392919061104d565b60405180910390fd5b61070984848484035f610800565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610780575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016107779190611082565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107f0575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016107e79190611082565b60405180910390fd5b6107fb8383836109cf565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610870575f6040517fe602df050000000000000000000000000000000000000000000000000000000081526004016108679190611082565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108e0575f6040517f94280d620000000000000000000000000000000000000000000000000000000081526004016108d79190611082565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208190555080156109c9578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516109c09190610da3565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a1f578060025f828254610a1391906110c8565b92505081905550610aed565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610aa8578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610a9f9392919061104d565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b34578060025f8282540392505081905550610b7e565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610bdb9190610da3565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015610c1f578082015181840152602081019050610c04565b5f8484015250505050565b5f601f19601f8301169050919050565b5f610c4482610be8565b610c4e8185610bf2565b9350610c5e818560208601610c02565b610c6781610c2a565b840191505092915050565b5f6020820190508181035f830152610c8a8184610c3a565b905092915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610cbf82610c96565b9050919050565b610ccf81610cb5565b8114610cd9575f80fd5b50565b5f81359050610cea81610cc6565b92915050565b5f819050919050565b610d0281610cf0565b8114610d0c575f80fd5b50565b5f81359050610d1d81610cf9565b92915050565b5f8060408385031215610d3957610d38610c92565b5b5f610d4685828601610cdc565b9250506020610d5785828601610d0f565b9150509250929050565b5f8115159050919050565b610d7581610d61565b82525050565b5f602082019050610d8e5f830184610d6c565b92915050565b610d9d81610cf0565b82525050565b5f602082019050610db65f830184610d94565b92915050565b5f805f60608486031215610dd357610dd2610c92565b5b5f610de086828701610cdc565b9350506020610df186828701610cdc565b9250506040610e0286828701610d0f565b9150509250925092565b5f60ff82169050919050565b610e2181610e0c565b82525050565b5f602082019050610e3a5f830184610e18565b92915050565b5f60208284031215610e5557610e54610c92565b5b5f610e6284828501610cdc565b91505092915050565b5f8060408385031215610e8157610e80610c92565b5b5f610e8e85828601610cdc565b9250506020610e9f85828601610cdc565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610eed57607f821691505b602082108103610f0057610eff610ea9565b5b50919050565b7f496e73756666696369656e742062616c616e63650000000000000000000000005f82015250565b5f610f3a601483610bf2565b9150610f4582610f06565b602082019050919050565b5f6020820190508181035f830152610f6781610f2e565b9050919050565b7f43616e6e6f742073656e6420746f20746865207a65726f2061646472657373005f82015250565b5f610fa2601f83610bf2565b9150610fad82610f6e565b602082019050919050565b5f6020820190508181035f830152610fcf81610f96565b9050919050565b7f546f6b656e7320616c726561647920636c61696d6564000000000000000000005f82015250565b5f61100a601683610bf2565b915061101582610fd6565b602082019050919050565b5f6020820190508181035f83015261103781610ffe565b9050919050565b61104781610cb5565b82525050565b5f6060820190506110605f83018661103e565b61106d6020830185610d94565b61107a6040830184610d94565b949350505050565b5f6020820190506110955f83018461103e565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6110d282610cf0565b91506110dd83610cf0565b92508282019050808211156110f5576110f461109b565b5b9291505056fea2646970667358221220725279b5fa4be96bd7aa8b79521cdd1f04a9b975ef39ce25c0700273818c4a0064736f6c63430008140033";  // Replace with the actual bytecode

        // Initialize Web3
        // Declare deployedContract globally to share it between functions
let deployedContract = null;

if (typeof window.ethereum !== 'undefined') {
    const web3 = new Web3(window.ethereum);

    document.getElementById('deployButton').onclick = async () => {
        const statusElement = document.getElementById('deploymentStatus');
        const addressElement = document.getElementById('contractAddress');
        const coinName = document.getElementById('coinName').value;
        const coinSymbol = document.getElementById('coinSymbol').value;
        const initialSupply = document.getElementById('initialSupply').value;

        if (!coinName || !coinSymbol || !initialSupply) {
            alert("Please provide all inputs.");
            return;
        }

        try {
            statusElement.textContent = "Status: Connecting wallet...";
            await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            const accounts = await web3.eth.getAccounts();

            if (accounts.length === 0) {
                throw new Error('No Ethereum accounts available');
            }

            statusElement.textContent = "Status: Preparing deployment...";
            const defaultAccount = accounts[0];

            // Prepare deployment
            const contract = new web3.eth.Contract(contractABI);
            const deployTx = contract.deploy({
                data: '0x' + contractBytecode,
                arguments: [coinName, coinSymbol, initialSupply],
            });

            const gasLimit = await deployTx.estimateGas({
                from: defaultAccount,
            });

            statusElement.textContent = "Status: Deploying contract...";
            const newContractInstance = await deployTx.send({
                from: defaultAccount,
                gas: gasLimit,
            });

            // Save deployed contract instance globally
            deployedContract = newContractInstance;

            statusElement.textContent = "Status: Deployment successful!";
            addressElement.textContent = `Contract Address: ${deployedContract.options.address}`;
        } catch (error) {
            console.error("Deployment error details:", error);

            let errorMessage = "Deployment failed";
            if (error.code === 4001) {
                errorMessage = "Transaction was rejected by user";
            } else if (error.message.includes("insufficient funds")) {
                errorMessage = "Insufficient funds for gas * price + value";
            } else if (error.message.includes("nonce")) {
                errorMessage = "Account nonce error - try resetting MetaMask";
            }

            statusElement.textContent = `Status: ${errorMessage}`;
        }
    };

    document.getElementById('sendCoinsButton').onclick = async () => {
        const transferStatusElement = document.getElementById('transferStatus');
        const recipientAddress = document.getElementById('recipientAddress').value;
        const amountToSend = document.getElementById('amountToSend').value;

        if (!recipientAddress || !amountToSend || !deployedContract) {
            alert("Please provide all inputs and ensure the contract is deployed.");
            return;
        }

        try {
            transferStatusElement.textContent = "Status: Sending MemeCoins...";
            const defaultAccount = await web3.eth.getAccounts();

            if (defaultAccount.length === 0) {
                throw new Error('No Ethereum accounts available');
            }

            // Send the coins
            const transferResult = await deployedContract.methods.transfer(
                recipientAddress,
                web3.utils.toWei(amountToSend, 'ether') // Convert amount to Wei
            ).send({
                from: defaultAccount[0],
            });

            transferStatusElement.textContent = `Status: Transfer successful! Transaction hash: ${transferResult.transactionHash}`;
        } catch (error) {
            console.error("Transfer error details:", error);
            let errorMessage = "Transfer failed";
            if (error.code === 4001) {
                errorMessage = "Transaction was rejected by user";
            } else if (error.message.includes("insufficient funds")) {
                errorMessage = "Insufficient funds for gas * price + value";
            }
            transferStatusElement.textContent = `Status: ${errorMessage}`;
        }
    };
}

         else {
            alert("MetaMask or Web3 provider is required to use this DApp.");
        }