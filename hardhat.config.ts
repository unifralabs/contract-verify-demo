import * as dotenv from "dotenv";

import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    scrollTestnet: {
      url: process.env.SCROLL_TESTNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  // npx hardhat verify --network scrollTestnet 0x95ad51f4406bf2AF31e3A2e2d75262EE19432261 123
  etherscan: {
    apiKey: {
      scrollTestnet: "abc",
    },
    customChains: [
      {
        network: "scrollTestnet",
        chainId: 534353,
        urls: {
          apiURL: "https://scrollscan-alpha.unifra.io/api/contract",
          browserURL: "https://scrollscan-alpha.unifra.io/",
        },
      },
    ],
  },
};

export default config;
