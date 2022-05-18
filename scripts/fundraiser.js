// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
//hardhat库使用ethers组件与区块链进行交互
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
//   const Fundraiser = await hre.ethers.getContractFactory("Fundraiser");
//   const fundraiser = await Fundraiser.deploy("Hello, Fundraiser!");
//   await fundraiser.deployed();
//   console.log("Fundraiser deployed to:", fundraiser.address);

  const FundraiserFactory = await hre.ethers.getContractFactory("FundraiserFactory");
  const fundraiserFactory = await FundraiserFactory.deploy();// 这是部署合约时候可选的构造参数，
  await fundraiserFactory.deployed();
  console.log("fundraiserFactory deployed to:", fundraiserFactory.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
//执行部署
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});