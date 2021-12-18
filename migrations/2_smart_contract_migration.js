const SmartContract = artifacts.require("SmartContract");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "NFT_TEST", "NFTT", "ipfs:/QmPZPGU7WNZ899Y9QwCreSX6qQdzrgfbkEqztW5jCTCeVU/" );
};
