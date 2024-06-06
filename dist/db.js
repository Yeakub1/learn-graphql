const products = [
    {
        id: "1",
        name: "Wireless Mouse",
        image: "https://example.com/images/wireless-mouse.jpg",
        description: "A sleek and ergonomic wireless mouse with a high-precision sensor and long battery life.",
        price: 25.99,
        quantity: 150,
        instock: true,
        categoreId: "1"
    },
    {
        id: "2",
        name: "Gaming Keyboard",
        image: "https://example.com/images/gaming-keyboard.jpg",
        description: "Mechanical gaming keyboard with customizable RGB backlighting and programmable keys.",
        price: 79.99,
        quantity: 85,
        instock: true,
        categoreId: "2"
    },
    {
        id: "3",
        name: "Stainless Steel Water Bottle",
        image: "https://example.com/images/stainless-steel-water-bottle.jpg",
        description: "Durable and insulated stainless steel water bottle, keeps beverages cold for 24 hours.",
        price: 19.99,
        quantity: 200,
        instock: true,
        categoreId: "3"
    },
    {
        id: "4",
        name: "Noise Cancelling Headphones",
        image: "https://example.com/images/noise-cancelling-headphones.jpg",
        description: "Over-ear noise cancelling headphones with superior sound quality and comfortable design.",
        price: 129.99,
        quantity: 60,
        instock: true,
        categoreId: "4"
    },
    {
        id: "5",
        name: "Organic Cotton T-Shirt",
        image: "https://example.com/images/organic-cotton-tshirt.jpg",
        description: "Soft and breathable organic cotton t-shirt, available in various colors and sizes.",
        price: 15.99,
        quantity: 300,
        instock: true,
        categoreId: "5"
    },
];
const categories = [
    {
        "id": "1",
        "name": "storts",
    },
    {
        "id": "2",
        "name": "Mobile",
    },
    {
        "id": "3",
        "name": "Programming",
    },
    {
        "id": "4",
        "name": "development",
    },
    {
        "id": "5",
        "name": "gamming",
    },
];
export const db = {
    products,
    categories,
};
