import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  TerminalHttpProvider,
  EnvironmentTypes,
  SourceType,
  Web3Versions
} from "@terminal-packages/sdk";
const PocketProvider = require("pocket-js-web3-provider");
const Web3 = require("web3");

function App() {
  const pocketTester = () => {
    const provider = new PocketProvider("ETH", "4", "DEVUlxD8VwKzXEJJsBHHfEt", {
      maxNodes: 3,
      requestTimeOut: 20000,
      sslOnly: false
    });

    const web3Instance = new Web3(
      new TerminalHttpProvider({
        apiKey: "QuLGEJxhbG4L1mMSElov7g==",
        source: "POCKET",
        customHttpProvider: provider,
        projectId: "yNaYbqjdmwoQndwes",
        environment: EnvironmentTypes.live,
        web3Version: Web3Versions.one
      })
    );
    //const web3Instance = new Web3(provider);
    web3Instance.eth
      .getBalance("0xE22FD0840d127E44557D5E19A0A9a52EAfc3e297")
      .then(console.log);
  };

  return (
    <div>
      <button onClick={() => pocketTester()}>Test button getBalance</button>
    </div>
  );
}

export default App;
