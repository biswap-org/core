pragma solidity =0.5.16;

import '../BiswapERC20.sol';

contract ERC20 is BiswapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
