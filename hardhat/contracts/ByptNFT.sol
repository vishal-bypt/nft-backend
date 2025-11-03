// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";

contract ByptNFT is ERC721URIStorage, ERC2981, Ownable {
    uint256 public nextTokenId;

    constructor(string memory name_, string memory symbol_, address owner_) 
        ERC721(name_, symbol_)
        Ownable(owner_)
    {}

    function mintTo(address to, string memory tokenURI_) external onlyOwner returns (uint256) {
        uint256 id = nextTokenId;
        nextTokenId++;
        _safeMint(to, id);
        _setTokenURI(id, tokenURI_);
        return id;
    }

    // royalty: set default royalty for all tokens (e.g., 5% -> feeNumerator = 500 if feeDenominator is 10000)
    function setDefaultRoyalty(address receiver, uint96 feeNumerator) external onlyOwner {
        _setDefaultRoyalty(receiver, feeNumerator);
    }

    // the following overrides are required by Solidity
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721URIStorage, ERC2981) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
