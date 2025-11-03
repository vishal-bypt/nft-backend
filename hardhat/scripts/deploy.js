// const { ethers } = require("hardhat");

// async function main() { 
//   try {
//     console.log("-initialize minting-")
//     const companyAddress = "0xcc0cc2219d6891DCb005fAE04145FCe66802D6D8";
   
//     const [deployer] = await ethers.getSigners();
//     const nonce = await deployer.getNonce();
//     const MyNFT = await ethers.getContractFactory("ByptNFT");
//     //const companyAddress = "0xcc0cc2219d6891DCb005fAE04145FCe66802D6D8"; // your company wallet address
//     const contract2 = await MyNFT.deploy({ nonce, gasPrice: ethers.parseUnits("1", "gwei") });
//     await contract2.waitForDeployment();
//     const deployedAddress = await contract2.getAddress();
//     console.log("MyNFT contract deployed to:", deployedAddress);
//     //MyNFT contract deployed to: 0x56046dD7516426310a26C63F4800b9f546C2D1cB
//   } catch (error) {
//     console.log("-error-", error)
//   }  
// }
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


const { ethers } = require("hardhat");

async function main() { 
  try {
    console.log("-initialize minting-")
    const companyAddress = "0xcc0cc2219d6891DCb005fAE04145FCe66802D6D8";
   
    const [deployer] = await ethers.getSigners();
    const nonce = await deployer.getNonce();
    
    const MyNFT = await ethers.getContractFactory("ByptNFT");

    const nftName = "ByptNFT";
    const nftSymbol = "BYPT";
    const ownerAddress = companyAddress;

    const contract2 = await MyNFT.deploy(
      nftName,
      nftSymbol,
      ownerAddress,
      { nonce, gasPrice: ethers.parseUnits("1", "gwei") }
    );

    await contract2.waitForDeployment();
    const deployedAddress = await contract2.getAddress();
    console.log("MyNFT contract deployed to:", deployedAddress);

  } catch (error) {
    console.log("-error-", error)
  }  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
