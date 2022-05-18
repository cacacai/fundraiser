const { expect } = require("chai");
const { ethers } = require("hardhat"); //使用说明 https://github.com/NomicFoundation/hardhat/tree/master/packages/hardhat-ethers

/** 测试合约 */
describe("FundraiserFactory", function () {
  //如果合约内容改变会进行重新部署处理
  // it作为一个独立的测试单元
  let owner, addr1
  let fundraiserFactory
  let fundraiserAddr
  let fundraiser

   // `beforeEach` will run before each test, re-deploying the contract every
  // time. It receives a callback, which can be async.
  beforeEach(async function () {
    //一般是处理合约创建过程
  });

  it("合约创建", async function () {
    const FundraiserFactory = await ethers.getContractFactory("FundraiserFactory");
    fundraiserFactory = await FundraiserFactory.deploy();
    await fundraiserFactory.deployed();
  });
  it("创建捐赠合约", async () => {
    [owner, addr1] = await ethers.getSigners()// 获取测试地址
    await fundraiserFactory.createFundraiser("caitest", "https://pixabay.com/zh/", "https://pixabay.com/zh/photos/model-people-girl-fashion-portrait-4035591/","测试捐赠合约功能", addr1.address);
    const fundraiserList = await fundraiserFactory.fundraisers(5,0)
    expect(fundraiserList.length > 0,  "合约数量")//
    fundraiserAddr = fundraiserList[0]
  })

  it("发起捐赠", async () => {
    fundraiser = await ethers.getContractAt("Fundraiser", fundraiserAddr, owner)
    fundraiser.donate({value: ethers.utils.parseEther("0.1")})
    const count = await fundraiser.myDonationsCount()
    expect(count, "捐赠记录:"+ count).to.above(0,"捐赠记录需要大于0")
  })
});
