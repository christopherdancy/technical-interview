import { expect } from "chai";
import { ethers, deployments } from "hardhat";
import { Treasury } from "../typechain";

describe("Treasury", function () {
  let treasury: Treasury;

  beforeEach(async function () {
    deployments.fixture(["Treasury"]);
    treasury = await ethers.getContract("Treasury");
  });

  it("Should deploy Treasury", async function () {
    expect(treasury.address).to.be.properAddress;
  });
});
