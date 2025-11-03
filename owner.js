const { ethers } = require("ethers");

// Sepolia RPC (you can use Infura, Alchemy, or public RPC)
const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/e24e9e6e8cb942e7856b9419575d3749");

// NFT contract address (your contract)
const contractAddress = "0x56046dD7516426310a26C63F4800b9f546C2D1cB";

// ERC-721 ABI (only need the ownerOf function)
const abi = [
  "function ownerOf(uint256 tokenId) external view returns (address)"
];

async function main() {
  const contract = new ethers.Contract(contractAddress, abi, provider);

  const tokenId = 8;
  const owner = await contract.ownerOf(tokenId);

  console.log(`Owner of token ${tokenId}: ${owner}`);
}

main().catch(console.error);
