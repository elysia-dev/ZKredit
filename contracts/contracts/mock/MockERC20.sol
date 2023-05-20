// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockERC20 is ERC20 {
    constructor() ERC20("USDT", "Tether USD") {
        _mint(msg.sender, 10000 * 1e18);
    }

    function faucet(uint256 amount) public {
        _mint(msg.sender, amount);
    }
}
