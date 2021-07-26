require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind assume imitate prize fortune select'; 
let testAccounts = [
"0xb65bae3a2230c91118d8153426f2cb922189a6b78bc016579762dea55f0bdc1e",
"0x729d2b8e3b63b7050be6293cf1ade81a83dd6fc28d4ec6c19e253b231de41e1a",
"0x76191027bedd0a8a651daea6075d4a58cb6901f08d488294fc46a663e4ee0ab4",
"0xa87f15c6934135fbf3dd9f9f6d3d64bdf379b5450a034afa75c05b5144e3a892",
"0x576f21166100a4063ee28c172233686f621a3773aa423ff018e5b1c3feff81b6",
"0x76594d31b56dfb6dfdb9f682df13dbde6b6d079295ed82414996d2706f8a6e72",
"0x860fe08ba035ad1a54205d060f5b593cb3331897e197b4065d15cc3ce2794eee",
"0xfd508fdc1f6570d978e959bd930f0ceb830b8a71b5363fcd7a9c835413650421",
"0x0ef8a4c42fcb25b357e69a53cbc8bd90a8fab3ec1aa42feb68296f1de435bfa5",
"0xe4f1a4d0b7cbd3e2a9de2ab4bfe7a53fd233fedaf93b0724ac5e9b3c5e4625f9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


