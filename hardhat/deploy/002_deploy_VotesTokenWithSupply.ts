import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployContract } from "../helpers/deployContract";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  await deployContract(hre, "VotesTokenWithSupply", [
    "test",
    "test",
    [deployer],
    [1000000],
    1000000000,
    (await hre.deployments.get("Treasury")).address,
  ]);
};
export default func;
