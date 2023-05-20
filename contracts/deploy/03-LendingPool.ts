import { DeployFunction } from "hardhat-deploy/dist/types"

const deployFn: DeployFunction = async function (hre) {
  const { deployments, getNamedAccounts } = hre
  const { deploy, get } = deployments
  const { deployer } = await getNamedAccounts()

  const verifier = (await get("ERC721Verifier")).address;
  const mockERC20 = (await get("MockERC20")).address;

  await deploy("LendingPool", {
    from: deployer,
    log: true,
    args: [mockERC20, verifier]
  })
}

deployFn.tags = ["testnet", "mainnet", "LendingPool"]

export default deployFn
