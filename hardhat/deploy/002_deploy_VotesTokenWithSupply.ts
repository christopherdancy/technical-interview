import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployContract } from "../helpers/deployContract";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const treasury = await hre.ethers.getContract("Treasury");
  await deployContract(hre, "VotesTokenWithSupply", [
    "token1",
    "one",
    [deployer],
    [1000000],
    1000000000,
    treasury.address,
  ]);

  const token1 = await hre.ethers.getContract("VotesTokenWithSupply");
  await token1.approve(treasury.address, 1000000);

  await deployContract(hre, "VotesTokenWithSupply", [
    "token2",
    "two",
    [deployer],
    [1000000],
    1000000000,
    treasury.address,
  ]);
  const token2 = await hre.ethers.getContract("VotesTokenWithSupply");
  await token2.approve(treasury.address, 1000000);

  console.log(
    await (await token1.allowance(deployer, treasury.address)).toString()
  );
  console.log(
    await (await token2.allowance(deployer, treasury.address)).toString()
  );
};
export default func;
