const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Product {
        id:Int!,
        name: String!
        image: String!
        price: Int!
    }

    type User {
        id: Int!,
        user_name:String!,
        password: String!
    }

    # Queries 
    type Query{
        sayHi: String! 
        getAllProducts: [Product!]!
    }

    # Mutations
    type Mutation{
        # createProduct(
        #     name: String!
        #     image: String!
        #     price: Int!
        # ): Product!

        makeFavourite(
            product_id: Int!
            user_id: Int!
        ): true | false
    }
`;

module.exports = { typeDefs };