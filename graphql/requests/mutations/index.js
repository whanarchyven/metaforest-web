const fs = require('fs');
const path = require('path');

module.exports.createOrFindUserViaTelegramInitData = fs.readFileSync(path.join(__dirname, 'createOrFindUserViaTelegramInitData.gql'), 'utf8');
module.exports.metaforestAdminEditConfigSingleParam = fs.readFileSync(path.join(__dirname, 'metaforestAdminEditConfigSingleParam.gql'), 'utf8');
module.exports.metaforestAdminGrantNfts = fs.readFileSync(path.join(__dirname, 'metaforestAdminGrantNfts.gql'), 'utf8');
module.exports.metaforestAdminInitConfig = fs.readFileSync(path.join(__dirname, 'metaforestAdminInitConfig.gql'), 'utf8');
module.exports.metaforestAdminInitJobs = fs.readFileSync(path.join(__dirname, 'metaforestAdminInitJobs.gql'), 'utf8');
module.exports.metaforestInitStateForUser = fs.readFileSync(path.join(__dirname, 'metaforestInitStateForUser.gql'), 'utf8');
module.exports.metaforestPerformAbiFunction = fs.readFileSync(path.join(__dirname, 'metaforestPerformAbiFunction.gql'), 'utf8');
module.exports.metaforestPerformMyAbiFunction = fs.readFileSync(path.join(__dirname, 'metaforestPerformMyAbiFunction.gql'), 'utf8');
module.exports.metaforestUserClearPush = fs.readFileSync(path.join(__dirname, 'metaforestUserClearPush.gql'), 'utf8');
module.exports.metaforestUserTakeJob = fs.readFileSync(path.join(__dirname, 'metaforestUserTakeJob.gql'), 'utf8');
