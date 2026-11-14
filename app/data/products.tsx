export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  icon: string;
  color: string;
  tag?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Classic T-Shirt",
    category: "T-Shirts",
    description: "Soft cotton tee for everyday wear.",
    price: 15,
    rating: 4.5,
    icon: "👕",
    color: "#FFE2A8",
    tag: "Best seller",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    category: "Jeans",
    description: "Stretch denim that moves with you.",
    price: 38,
    rating: 4.6,
    icon: "👖",
    color: "#D6DDF5",
  },
  {
    id: 3,
    name: "Formal Pant",
    category: "Pants",
    description: "Neat straight-cut pant for the office.",
    price: 32,
    rating: 4.3,
    icon: "👖",
    color: "#E4E0D8",
  },
  {
    id: 4,
    name: "Cargo Pant",
    category: "Pants",
    description: "Roomy pockets and a relaxed fit.",
    price: 35,
    rating: 4.4,
    icon: "👖",
    color: "#CFE8D5",
    tag: "New",
  },
  {
    id: 5,
    name: "Cotton Shirt",
    category: "Shirts",
    description: "Light full-sleeve shirt, easy to iron.",
    price: 24,
    rating: 4.2,
    icon: "👔",
    color: "#F6D5D5",
  },
  {
    id: 6,
    name: "Pullover Hoodie",
    category: "Hoodies",
    description: "Warm fleece inside, with a front pocket.",
    price: 45,
    rating: 4.7,
    icon: "🧥",
    color: "#DCD2F0",
    tag: "Sale",
  },
  {
    id: 7,
    name: "Denim Jacket",
    category: "Jackets",
    description: "A classic layer for cool evenings.",
    price: 58,
    rating: 4.5,
    icon: "🧥",
    color: "#C9E3EE",
  },
  {
    id: 8,
    name: "Summer Shorts",
    category: "Shorts",
    description: "Breathable shorts for hot days.",
    price: 18,
    rating: 4.1,
    icon: "🩳",
    color: "#FFD9BF",
  },
];