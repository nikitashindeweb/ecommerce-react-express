const { Products } = require('../Data');

const resolvers = {
    Query: {
        sayHi: () => "Hello World!",

        getAllProducts: () => {
            console.log("Products", Products)
            return Products;
        }
    },

    Mutation: {
        // createProduct(parent, args) {
        //     const newProduct = args;
        //     Products.push(newProduct);
        //     return newProduct;
        // },

        makeFavourite(parent, args) {
            const { product_id, user_id } = args;

            // check is valid user

            // check is valid product

            // add init favourite_product
            if (false) {
                return false;
            }

            return true
        }


    }
}

module.exports = { resolvers }