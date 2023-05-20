// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./lib/GenesisUtils.sol";
import "./interfaces/ICircuitValidator.sol";
import "./verifiers/ZKPVerifier.sol";

contract ERC721Verifier is ERC721, ZKPVerifier {
    uint64 public constant TRANSFER_REQUEST_ID = 1;
    uint256 public nextId = 0;

    mapping(uint256 => address) public idToAddress;
    mapping(address => uint256) public addressToId;
    mapping(uint256 => uint256) public idToTotalBorrowed;

    constructor(string memory name_, string memory symbol_)
    ERC721(name_, symbol_)
    {}

    function totalBorrowed(address borrower) external view returns(uint256) {
        uint256 id = addressToId[borrower];
        require(id != 0, "No registered id");
        return idToTotalBorrowed[id];
    }

    function afterBorrow(address borrower, uint256 amount) external {
        uint256 id = addressToId[borrower];
        require(id != 0, "No registered id");

        idToTotalBorrowed[id] += amount;
    }

    function afterRepay(address borrower, uint256 amount) external {
        uint256 id = addressToId[borrower];
        require(id != 0, "No registered id");

        idToTotalBorrowed[id] -= amount;
    }

    function _beforeProofSubmit(
        uint64, /* requestId */
        uint256[] memory inputs,
        ICircuitValidator validator
    ) internal view override {
        // check that  challenge input is address of sender
        address addr = GenesisUtils.int256ToAddress(
            inputs[validator.getChallengeInputIndex()]
        );
        // this is linking between msg.sender and
        require(
            _msgSender() == addr,
            "address in proof is not a sender address"
        );
    }

    function _afterProofSubmit(
        uint64 requestId,
        uint256[] memory inputs,
        ICircuitValidator validator
    ) internal override {
        uint256 userId = inputs[1];

        if (idToAddress[userId] == address(0) && addressToId[_msgSender()] == 0) {
            addressToId[_msgSender()] = userId;
            idToAddress[userId] = _msgSender();
        }

        super._mint(_msgSender(), nextId++);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256, /* firstTokenId */
        uint256 /* batchSize */
    ) internal override {
        require(from == address(0) || to == address(0), "SBT: cannot transfer");
    }
}
