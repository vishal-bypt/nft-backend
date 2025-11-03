require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: {
        count: 10, // Number of accounts
        initialBalance: "1000000000000000000000", // 1000 ETH per account
      },
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/e24e9e6e8cb942e7856b9419575d3749`,
      accounts: [`438da023f9784015bb015195382bb8bc428797a7aa52783059f817c8ec826d3b`],
    },
  },
};
