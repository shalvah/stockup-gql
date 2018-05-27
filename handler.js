'use strict';
const { graphql } = require('graphql');
const schema = require('./schema');

module.exports.queryProducts = (event, context, callback) => {
    graphql(schema, event.body)
        .then(result => callback(null, {statusCode: 200, body: JSON.stringify(result)}))
        .catch(callback);
};
