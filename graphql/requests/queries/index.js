const fs = require('fs');
const path = require('path');

module.exports.abs = fs.readFileSync(path.join(__dirname, 'abs.gql'), 'utf8');
module.exports.adminGetConfig = fs.readFileSync(path.join(__dirname, 'adminGetConfig.gql'), 'utf8');
module.exports.getInternalContractAbi = fs.readFileSync(path.join(__dirname, 'getInternalContractAbi.gql'), 'utf8');
module.exports.mfGetMyUserGameFullState = fs.readFileSync(path.join(__dirname, 'mfGetMyUserGameFullState.gql'), 'utf8');
module.exports.mfUserGetGameFullState = fs.readFileSync(path.join(__dirname, 'mfUserGetGameFullState.gql'), 'utf8');
module.exports.test = fs.readFileSync(path.join(__dirname, 'test.gql'), 'utf8');
module.exports.userGetPush = fs.readFileSync(path.join(__dirname, 'userGetPush.gql'), 'utf8');
module.exports.userGetState = fs.readFileSync(path.join(__dirname, 'userGetState.gql'), 'utf8');
