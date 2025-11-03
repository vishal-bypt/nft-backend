require("dotenv").config();
const { Wallet, Contract, JsonRpcProvider } = require("ethers");

// Setup provider and wallet
const provider = new JsonRpcProvider(process.env.RPC_URL);
const wallet = new Wallet(process.env.PRIVATE_KEY, provider);

// Contract details
const contractAddress = "0x56046dD7516426310a26C63F4800b9f546C2D1cB"; // replace with your deployed address
const abi = [
  "function mint(address to, string memory uri) external"
];

// Connect to contract
const contract = new Contract(contractAddress, abi, wallet);

// Mint function
async function mintNFT(to, tokenURI) {
  try {
    console.log(`Minting NFT to ${to} with URI: ${tokenURI}`);

    const tx = await contract.mint(to, tokenURI);
    console.log("Transaction hash:", tx.hash);

    const receipt = await tx.wait();
    console.log("✅ NFT Minted! Block:", receipt.blockNumber);
  } catch (error) {
    console.error("❌ Error minting NFT:", error);
  }
}

// Example call
// The wallet (PRIVATE_KEY) must be the contract owner!
const recipient = "0x3495faDE68b46F24Ec8bB76EEaAF594aCA410c6F"; // replace with target wallet
const metadataURI = "ipfs://QmSo1jWD84wnX7Aa4pTgtBsFjc7uBsFfeyn4JeT4wHetdb";

mintNFT(recipient, metadataURI);
