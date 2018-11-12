// const assert = require('assert');
// const ganache = require('ganache-cli');
// const Web3 = require('web3');

// const provider = ganache.provider();
// const web3 = new Web3(provider);
// // web3.currentProvider.setMaxListeners(3000000);
// require('events').EventEmitter.defaultMaxListeners = 0;

// const {
// 	interface,
// 	bytecode
// } = require('../compile');

// let accounts;
// let inbox;
// const initialMessage = 'Hi there!'

// beforeEach(async () => {
// 	// Get a list of all accounts
// 	accounts = await web3.eth.getAccounts();

// 	// Use one of those accounts to deploy the contract
// 	inbox = await new web3.eth.Contract(JSON.parse(interface))
// 		.deploy({
// 			data: bytecode,
// 			arguments: [initialMessage]
// 		})
// 		.send({
// 			from: accounts[0],
// 			gas: '1000000'
// 		});

// 	inbox.setProvider(provider);

// });

// describe('Inbox', () => {
// 	it('should deploy a contract', () => {
// 		assert.ok(inbox.options.address);
// 	});

// 	it('should have a default message', async () => {
// 		const message = await inbox.methods.message().call();
// 		assert.equal(message, initialMessage);
// 	});

// 	it('should be able to change the message', async () => {
// 		await inbox.methods.setMessage('bye')
// 			.send({
// 				from: accounts[0]
// 			});
// 		const message = await inbox.methods.message().call();
// 		assert.equal(message, 'bye');
// 	});
// });