'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports = (data) => {
    const params = {
        TableName: 'products',
        Item: {
            name: data.name,
            quantity: data.quantity,
            id: uuid.v1(),
            addedAt: Date.now(),
        }
    };
    return dynamoDb.put(params).promise()
        .then(result => params.Item);
};
