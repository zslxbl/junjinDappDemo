const path = require("path");
const Web3 = require("web3");
const HDWalletProvider = require("truffle-hdwallet-provider");

/**
 * 1 拿到 bytecode
 */
const contractPath = path.resolve(__dirname, "../compiled/Car.json");
const { interface, bytecode } = require(contractPath);

/**
 * 2 配置provider
 */
const provider = new HDWalletProvider(
  "garment upper kitten turtle affair oil ridge glow lake before relief skill",
  "ropsten:https://ropsten.infura.io/v3/c3af5f4a283c477499c1f8e29816a988"
);

/**
 * 3 初始化web3实例
 */
const web3 = new Web3(provider);
(async () => {
  /**
   * 4 获取钱包里面的账户
   */
  const accounts = await web3.eth.getAccounts();
  console.log("部署智能合约账户：", accounts[0]);

  /**
   * 5 创建合约实例并部署
   */
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["hehedaqiche"] })
    .send({ from: accounts[0], gas: "100000" });
  console.log("合约部署成功：", result);
})();
