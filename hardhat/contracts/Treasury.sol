//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Treasury {
    using SafeERC20 for IERC20;

    mapping(address => mapping(address => uint256)) public userBalances;

    event Deposit(address sender, address token, uint amount);

    function deposit(address token, uint amount) public returns (string memory) {
        userBalances[msg.sender][token] = amount;
        string memory fixMe = "please";
        emit Deposit(msg.sender, token, amount);
        return fixMe;
    }

    function withdraw(uint amount) public pure returns (string memory) {
        string memory fixMe = "please";
        return fixMe;
    }
}
