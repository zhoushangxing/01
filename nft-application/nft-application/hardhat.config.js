/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   
   solidity: "0.8.26",
   defaultNetwork: "nft",
   networks: {
      hardhat: { },
      nft: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`],
         gas: 2100000,
         gasPrice: 20000000000,
      }
   },
}