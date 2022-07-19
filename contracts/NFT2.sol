//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./NFT.sol";

contract NFT2 is NFT {
    function test() pure public returns(string memory){
        return "upgraded";
    }

}