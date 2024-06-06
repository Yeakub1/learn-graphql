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
    category: (parants: { categoreId: string }, args: any, context: any) => {
      return db.categories.find(
        (category) => category.id === parants.categoreId
      );
    },
  },
  Category: {
    products: (parants: any, args: any, context: any) => {
      return db.products.filter(product => product.categoreId === parants.id);
    },
  },
};
