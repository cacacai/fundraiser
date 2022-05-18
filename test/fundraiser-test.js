const { expect } = require("chai");
const { ethers } = require("hardhat");

/** 测试合约 */
describe("FundraiserFactory", function () {
  //如果合约内容改变会进行重新部署处理
  it("Should return the new FundraiserFactory once it's changed", async function () {
    const FundraiserFactory = await ethers.getContractFactory("FundraiserFactory");
    const fundraiser = await FundraiserFactory.deploy();
    await fundraiser.deployed();
    
    //测试合约功能     expect(await greeter.greet()).to.equal("Hello, world!");
    
    const fundraisersCount = await fundraiser.fundraisersCount();
    console.log(fundraisersCount + "test cai")
  });
});
