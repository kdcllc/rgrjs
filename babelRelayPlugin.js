// var getBabelRelayPlugin = require('babel-relay-plugin');
// 
// var schemaData = require('./data/schema.json').data;
// 
// module.exports = getBabelRelayPlugin(schemaData);

//-- build map based on the graphql
require('dotenv').load(); 
var introspectionQuery = require('graphql/utilities').introspectionQuery; 
var request = require('sync-request'); 
var getbabelRelayPlugin = require('babel-relay-plugin'); 
var url = 'http://localhost:3000/graphql'; // be sure to include /graphql 
var response = request('POST', url, { qs: { query: introspectionQuery, }, }); 
var schema = JSON.parse(response.body.toString('utf-8'));
 
module.exports = getbabelRelayPlugin(schema.data); 