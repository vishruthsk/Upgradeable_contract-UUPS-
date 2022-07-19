const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

describe("ERC721 Upgradeable", function () {
  it("Should deploy an upgradeable ERC721 Contract", async function () {
    const NFT = await ethers.getContractFactory("NFT");
    const NFT2 = await ethers.getContractFactory("NFT2");

    let proxyContract = await hre.upgrades.deployProxy(NFT, {
      kind: "uups",
    });
    const [owner] = await ethers.getSigners();
    const ownerOfToken1 = await proxyContract.ownerOf(1);

    expect(ownerOfToken1).to.equal(owner.address);

    proxyContract = await hre.upgrades.upgradeProxy(proxyContract, NFT2);
    expect(await proxyContract.test()).to.equal("upgraded");
  });
});
