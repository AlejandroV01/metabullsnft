const SmartContract = artifacts.require("SmartContract");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Meta Bulls 3", "MTB3", "ipfs://QmTecP6wEP7egqEcZ52bcreD59csTxbufzib3yc6LqNviP/", "ipfs://QmTPWmTZxvjgfeTZWBnt4cmqxnFw9yMvcbadxL7oM8KfAd" );
};
