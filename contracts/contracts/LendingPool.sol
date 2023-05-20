// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./ERC721Verifier.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @dev This is just a POC of usecase for PolygonID. Do not use it in production.
 */
contract LendingPool is Ownable {
    IERC20 public token;
    ERC721Verifier public verifier;

    mapping(address => uint256) public debt;

    uint256 public MAX_BORROW = 10000 * 1e18;

    constructor(IERC20 _token, ERC721Verifier _verifier) {
        token = _token;
        verifier = _verifier;
    }

    /// @dev need to approve
    function deposit(uint256 amount) public {
        address user = msg.sender;
        token.transferFrom(user, address(this), amount);
    }

    function borrow(address user, uint256 amount) public {
        require(verifier.totalBorrowed(user) + amount <= MAX_BORROW, "MaxBorrowExceeded");

        debt[user] += amount;
        token.transfer(user, amount);
        verifier.afterBorrow(user, amount);
    }

    /// @dev need to approve
    function repay(uint256 amount) public {
        address user = msg.sender;
        debt[user] -= amount;
        token.transferFrom(user, address(this), amount);
        verifier.afterRepay(user, amount);
    }

    function updateMaxBorrow(uint256 _maxBorrow) public onlyOwner {
        MAX_BORROW = _maxBorrow;
    }

    function updateVerifier(ERC721Verifier _verifier) public onlyOwner {
        verifier = _verifier;
    }
}
