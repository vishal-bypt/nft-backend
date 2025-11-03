// server.js
require("dotenv").config();
const express = require("express");
var cors = require('cors')
const { Wallet, Contract, JsonRpcProvider } = require("ethers");

const app = express();
app.use(cors())
app.use(express.json());

// Setup provider and wallet
const provider = new JsonRpcProvider(process.env.RPC_URL);
const wallet = new Wallet(process.env.PRIVATE_KEY, provider);

// Contract details
const contractAddress = "0x56046dD7516426310a26C63F4800b9f546C2D1cB"; // replace with your contract
const abi = ["function mint(address to, string memory uri) external"];
const contract = new Contract(contractAddress, abi, wallet);

// Mint API
app.post("/mint", async (req, res) => {
  const { to, tokenURI } = req.body;
  try {
    console.log(`Minting NFT to ${to} with URI: ${tokenURI}`);
    const tx = await contract.mint(to, tokenURI);
    const receipt = await tx.wait();
    res.json({
      success: true,
      txHash: tx.hash,
      block: receipt.blockNumber,
    });
  } catch (error) {
    console.error("Error minting:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
