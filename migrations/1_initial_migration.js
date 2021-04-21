const BiswapFactory = artifacts.require("BiswapFactory");

module.exports = async function (deployer) {
  await deployer.deploy(BiswapFactory, '0xBF693dA185Ed1D2B78A490ac0926E1df183561B3');
  let instance = await BiswapFactory.deployed();
  await instance.setFeeTo("0x2184Caa4cFFe56A9d5aCc6D063920e7C6b56b2EB");
  let res = await instance.feeTo.call();
  console.log('fee - ', res)

  let INIT_CODE_HASH = await instance.INIT_CODE_HASH.call();
  console.log('INIT_CODE_HASH - ', INIT_CODE_HASH)
};
