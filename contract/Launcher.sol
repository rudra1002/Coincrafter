// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MemeCoin is ERC20 {
    mapping(address => bool) private hasClaimed;

    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply * 10**18); // Mint tokens to the deployer's address
    }

    function claimInitialTokens() external {
        require(!hasClaimed[msg.sender], "Tokens already claimed");
        uint256 initialAmount = 100 * 10**18; // 100 tokens
        hasClaimed[msg.sender] = true;
        _transfer(address(this), msg.sender, initialAmount);
    }

    function sendToAddress(address recipient, uint256 amount) external {
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        require(recipient != address(0), "Cannot send to the zero address");
        _transfer(msg.sender, recipient, amount);
    }
}