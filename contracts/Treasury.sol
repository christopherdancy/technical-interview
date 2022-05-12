//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Treasury {
    using SafeERC20 for IERC20;

    mapping(address => uint256) private userBalances;

    function deposit() public pure returns (string memory) {
        string memory fixMe = "please";
        return fixMe;
    }

    function withdraw() public pure returns (string memory) {
        string memory fixMe = "please";
        return fixMe;
    }
}
