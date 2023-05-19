import { DeployFunction } from "hardhat-deploy/dist/types"

const deployFn: DeployFunction = async function (hre) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const verifierContract = "ERC721Verifier";
  const verifierName = "ERC721zkAirdrop";
  const verifierSymbol = "zkERC721";

  const spongePoseidonLib = "0x12d8C87A61dAa6DD31d8196187cFa37d1C647153";
  const poseidon6Lib = "0xb588b8f07012Dc958aa90EFc7d3CF943057F17d7";

  await deploy(verifierContract, {
    from: deployer,
    log: true,
    args: [verifierName, verifierSymbol],
    libraries: {
      SpongePoseidon: spongePoseidonLib,
      PoseidonUnit6L: poseidon6Lib
    },
  })
}

deployFn.tags = ["testnet", "mainnet"]

export default deployFn
