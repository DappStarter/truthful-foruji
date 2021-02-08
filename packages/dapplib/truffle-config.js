require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remain social include prize olympic genius'; 
let testAccounts = [
"0xb77accd92449dcca0c9eea19351a3ac4e311d9ab924e85c925365cbb7246b674",
"0x41b36f67b6c549337a0b614bb669b8e6c3bd8fcd329e275a54ca2c98e8c6113f",
"0x7043452ec1c20d136c4adb4d13d9f9e4beb07d6c154bf14f050d101f86b07ce7",
"0x1386bebe3ee52ab70b954905826bc6949679c439c6dc19ab2de35fae6702b6c4",
"0xe74d4d768d05deb88331ecd25855eaa94d0039ca779a5494281fe715e0639e15",
"0x9e66830ff3e0ba4337a601ddd3cd6a86e78383cc2f240e10296f95555a07f5b5",
"0x95b8318bcda49b9d931b0632a77e3f35d83446713e94ea47dbbf795f4cfdebb1",
"0x97aa8e30328eb0859fd6f8b8ad3adedbe1324852903be2be46c6c0a92b6fcf7a",
"0x6dced08d1f12fc62777dc2eb13e1544d0c198b2cf9f9303641fea5f9847bd9f5",
"0x9ce4cafb36aed4814dced470215260dc177322cbfc75de3257a7238d86d84b64"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
