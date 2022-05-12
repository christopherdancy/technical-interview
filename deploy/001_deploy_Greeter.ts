import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployContract } from "../helpers/deployContract";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();

  await deployContract(hre, "Greeter", ["hi"]);
  const test = await hre.deployments.get("Greeter");
  console.log(test.address);
};
export default func;
