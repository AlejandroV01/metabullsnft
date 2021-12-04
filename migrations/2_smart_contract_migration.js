const SmartContract = artifacts.require("SmartContract");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "NFT_TEST", "NFTT", "ipfs:/QmcDQhkrmmjRN5oUxyedu9RKMuLxAAQcp3Tsnt2nKkgwqP/" );
};
