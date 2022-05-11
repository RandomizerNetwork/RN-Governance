const config = require('../config');

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();

    log("Deploying NLLToken....");
    const token = await deploy('NLLToken', {
      from: deployer,
      args: [],
      log: true,
    });
    log(`02 - Deployed 'NLLToken' at ${token.address}`);
    return true;
};
module.exports.tags = ['all', 'NLLToken'];
module.exports.id = 'NLLToken';