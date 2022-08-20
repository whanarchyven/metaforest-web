const fs = require('fs');
const path = require('path');

module.exports.getMe = fs.readFileSync(path.join(__dirname, 'getMe.gql'), 'utf8');
module.exports.metaforestAdminGetConfig = fs.readFileSync(path.join(__dirname, 'metaforestAdminGetConfig.gql'), 'utf8');
module.exports.metaforestGetInternalContractAbi = fs.readFileSync(path.join(__dirname, 'metaforestGetInternalContractAbi.gql'), 'utf8');
module.exports.metaforestJobsList = fs.readFileSync(path.join(__dirname, 'metaforestJobsList.gql'), 'utf8');
module.exports.metaforestUserGetMyPush = fs.readFileSync(path.join(__dirname, 'metaforestUserGetMyPush.gql'), 'utf8');
module.exports.metaforestUserGetMyState = fs.readFileSync(path.join(__dirname, 'metaforestUserGetMyState.gql'), 'utf8');
module.exports.metaforestUserGetPush = fs.readFileSync(path.join(__dirname, 'metaforestUserGetPush.gql'), 'utf8');
module.exports.metaforestUserGetState = fs.readFileSync(path.join(__dirname, 'metaforestUserGetState.gql'), 'utf8');
