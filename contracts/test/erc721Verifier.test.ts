const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC721Verifier", function () {
  let ERC721Verifier, erc721Verifier;

  before(async function () {
    ERC721Verifier = await ethers.getContractFactory("ERC721Verifier");
    erc721Verifier = await ERC721Verifier.deploy();
    await erc721Verifier.deployed();
  });

  it("", async function () {
  });
});
