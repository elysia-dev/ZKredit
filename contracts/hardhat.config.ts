/** @type import('hardhat/config').HardhatUserConfig */
import * as dotenv from "dotenv"
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-verify"
import "hardhat-deploy"
// import "@nomicfoundation/hardhat-toolbox"
import "./tasks";

dotenv.config()

const config = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    }
  },
  networks: {
    sepolia: {
      url: "https://rpc.sepolia.org/",
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_API_KEY}`
  }
};

export default config;