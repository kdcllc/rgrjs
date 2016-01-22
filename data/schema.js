import {
GraphQLSchema,
GraphQLObjectType,
GraphQLList,
GraphQLInt,
GraphQLString

} from 'graphql'

let Schema = (db) => {
    let counter = 42;
    let data = [{ counter: 42 }, { counter: 43 }, { counter: 44 }];
    let counterType = new GraphQLObjectType({
        name: 'Counter',
        fields: () => ({
            counter: { type: GraphQLInt }
        })
    });

    let linkType = new GraphQLObjectType({
        name: 'Link',
        fields: () => ({
            _id: { type: GraphQLString },
            title: { type: GraphQLString },
            url: { type: GraphQLString }
        })
    });

    let schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'Query',
            fields: () => ({
                counter: {
                    type: GraphQLInt,
                    resolve: () => counter
                },
                message: {
                    type: GraphQLString,
                    resolve: () => 'Hellow GraphQL'
                },
                data: {
                    type: new GraphQLList(counterType),
                    resolve: () => data
                },

                links: {
                    type: new GraphQLList(linkType),
                    resolve: () => db.collection('links').find({}).toArray()
                }
            }),
            mutation: new GraphQLObjectType({
                name: 'Mutation',
                fields: () => ({
                    incrementCounter: {
                        type: GraphQLInt,
                        resolve: () => ++counter
                    }
                })
            })
        })
    });

    return schema;
}

export default Schema;