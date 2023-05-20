import { DeployFunction } from "hardhat-deploy/dist/types"

const deployFn: DeployFunction = async function (hre) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  await deploy("MockERC20", {
    from: deployer,
    log: true,
  })
}

deployFn.tags = ["testnet"]

export default deployFn
