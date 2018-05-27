'use strict';

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} = require('graphql');
const addProduct = require('./resolvers/create');
const viewProduct = require('./resolvers/view');
const listProducts = require('./resolvers/list');
const removeProduct = require('./resolvers/remove');

const productType = new GraphQLObjectType({
    name: 'Product',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        quantity: { type: new GraphQLNonNull(GraphQLInt) },
        addedAt: { type: new GraphQLNonNull(GraphQLString) },
    }
});


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            listProducts: {
                type: new GraphQLList(productType),
                resolve: (parent, args) => listProducts()
            },
            viewProduct: {
                args: {
                    id: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: productType,
                resolve: (parent, args) => viewProduct(args.id)
            }
        }
    }),

    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            createProduct: {
                args: {
                    name: { type: new GraphQLNonNull(GraphQLString) },
                    quantity: { type: new GraphQLNonNull(GraphQLInt) }
                },
                type: productType,
                resolve: (parent, args) => addProduct(args)
            },
            removeProduct: {
                args: {
                    id: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: GraphQLBoolean,
                resolve: (parent, args) => removeProduct(args.id)
            },
        }
    })
});

module.exports = schema;
