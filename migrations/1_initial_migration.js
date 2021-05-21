const BiswapFactory = artifacts.require("BiswapFactory");

module.exports = async function (deployer) {
  await deployer.deploy(BiswapFactory, '0xdBE55A0daDc80EF88e884f15CE41c26c0Af933a0');
  let instance = await BiswapFactory.deployed();
  await instance.setFeeTo("0x3ea3016aa9e3faaD871AA45232055a424b00bFC1");
  let res = await instance.feeTo.call();
  console.log('fee - ', res)

  let INIT_CODE_HASH = await instance.INIT_CODE_HASH.call();
  console.log('INIT_CODE_HASH - ', INIT_CODE_HASH)
};
