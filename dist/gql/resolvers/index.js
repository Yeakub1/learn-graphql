import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parants, args, context) => {
            return db.products.find((pd) => pd.id === args.productId);
        },
        categories: () => db.categories,
        category: (parants, args, context) => {
            return db.categories.find((pd) => pd.id === args.categoryId);
        },
    },
};
