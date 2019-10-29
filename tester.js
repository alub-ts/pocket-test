const {
  TerminalHttpProvider,
  EnvironmentTypes,
  SourceType,
  Web3Versions
} = require("@terminal-packages/sdk");
const PocketProvider = require("pocket-js-web3-provider");
const Web3 = require("web3");
const provider = new PocketProvider("ETH", "4", "DEVUlxD8VwKzXEJJsBHHfEt", {
  maxNodes: 3,
  requestTimeOut: 20000,
  sslOnly: false
});
const web3Instance = new Web3(
  new TerminalHttpProvider({
    apiKey: "QuLGEJxhbG4L1mMSElov7g==",
    source: "POCKET",
    host: "test",
    customHttpProvider: provider,
    projectId: "yNaYbqjdmwoQndwe",
    environment: EnvironmentTypes.live,
    web3Version: "1"
  })
);
//const web3Instance = new Web3(provider)

web3Instance.eth
  .getBalance("0xE22FD0840d127E44557D5E19A0A9a52EAfc3e297")
  .then(console.log);
