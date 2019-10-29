const TerminalHttpProvider = require("@terminal-packages/sdk")
  .TerminalHttpProvider;
const PocketProvider = require("pocket-js-web3-provider");
const Web3 = require("web3");

var pocketProvider = new PocketProvider("ETH", "1", "DEVUlxD8VwKzXEJJsBHHfEt", {
  // This is just a stub, only gets called when eth_sendRawTransaction or eth_sendTransaction are called.
  transactionSigner: {
    /*
         Callback method called to determine wether or not the
         TransactionSigner supports signing transactions for the given addr         */
    hasAddress: async function(address) {
      return false;
    },
    /*
        Callback method called to generate a serialized signed format
        of the given a Web3.js transaction object 
        (https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sendtransaction)
        */
    signTransaction: async function(txParams) {
      console.log(txParams);
      return "0x";
    }
  },
  maxNodes: 3,
  requestTimeOut: 20000,
  sslOnly: false
});

const web3 = new Web3(
  new TerminalHttpProvider({
    host: "test",
    apiKey: "QuLGEJxhbG4L1mMSElov7g==",
    // projectId is not required to log but we suggest
    // using it for the best experience
    projectId: "yNaYbqjdmwoQndwe",
    // source can be any static or dynamic string as well
    source: "POCKET", // One cool thing would be to have Pocket added to the SourceType enum.
    customHttpProvider: pocketProvider,
    web3Version: "1"
  })
);

for (var i = 0; i < 10; i++) {
  web3.eth
    .getBalance("0xE22FD0840d127E44557D5E19A0A9a52EAfc3e297")
    .then(function(balance) {
      console.log(balance);
    });
}
