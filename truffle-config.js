var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'also brisk catch glad axis merry shield bundle hover early strike spawn';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/174bcbb3d4d64282af322f3298eecb67")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://mainnet.infura.io/v3/174bcbb3d4d64282af322f3298eecb67")
      },
      network_id: 1,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    },
    compilers: {
       solc: {
         version: "^0.5.11"  // ex:  "0.4.20". (Default: Truffle's installed solc)
       }
    }
  }
};



