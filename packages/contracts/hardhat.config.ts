import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-deploy";

import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

export const accounts = process.env.DEPLOYER_PRIVATE_KEY !== undefined ? [process.env.DEPLOYER_PRIVATE_KEY] : [];

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.12",
    settings: {
      // optimizer: {
      //   enabled: true,
      //   runs: 200,
      // },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/dIapWnteM78mUNXiFdEoJb6F9-6w2-hT",
      accounts,
      allowUnlimitedContractSize: true,
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/vzOwiL7MTT2bjnZozNtemIWyq0zC6oYW",
      accounts,
      allowUnlimitedContractSize: true,
    },
    scroll: {
      url: "https://alpha-rpc.scroll.io/l2",
      chainId: 534353,
      accounts,
    },
    optimism_goerli: {
      chainId: 420,
      url: `https://opt-goerli.g.alchemy.com/v2/${process.env.L2_ALCHEMY_KEY}`,
      accounts,
    },
    optimism_mainnet: {
      chainId: 10,
      url: `https://opt-mainnet.g.alchemy.com/v2/${process.env.L2_ALCHEMY_KEY}`,
      accounts,
    },
    zkEVM: {
      url: `https://rpc.public.zkevm-test.net`,
      chainId: 1442,
      accounts,
    },
  },
};

export default config;
