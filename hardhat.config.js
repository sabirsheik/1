/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "volta",
   networks: {
      hardhat: {},
      volta: {
         url: API_URL,  // Ensure this is correctly set in the .env
         accounts: [`0x${PRIVATE_KEY}`],  // Ensure private key is valid
         gas: 2100000,  // Lowered to a reasonable gas limit
         gasPrice: 8000000000,   // 8 Gwei (adjust as necessary)
      }
   },
};
