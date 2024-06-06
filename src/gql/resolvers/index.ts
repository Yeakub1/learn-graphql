import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parants: any, args: { productId: string }, context: any) => {
      return db.products.find((pd) => pd.id === args.productId);
    },
    categories: () => db.categories,
    category: (parants: any, args: { categoryId: string }, context: any) => {
      return db.categories.find((pd) => pd.id === args.categoryId);
    },
  },
  Product: {
    category: (parants: any, args: any, context: any) => {
      const result = db.categories.find((category) => category.id === parants.categoreId);
      return result;
    },
  },
};
