const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FundraiserFactory", function () {
  it("Should return the new FundraiserFactory once it's changed", async function () {
    const FundraiserFactory = await ethers.getContractFactory("FundraiserFactory");
    const fundraiser = await FundraiserFactory.deploy();
    await fundraiser.deployed();

    const fundraisersCount = await fundraiser.fundraisersCount();
    console.log(fundraisersCount + "test cai")
  });
});
