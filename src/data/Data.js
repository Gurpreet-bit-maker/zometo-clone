let restaurants = [
  {
    id: 0,
    name: "Biryani House",
    location: "Hyderabad, India",
    rating: 4.8,
    discount: 180,
    image: "/public/RestroImg/image1.png",
    added: false,
    menu: [
      { id: 301, name: "Chicken Biryani", price: 180, added: false },
      { id: 302, name: "Mutton Biryani", price: 250, added: false },
      { id: 303, name: "Veg Biryani", price: 150, added: false },
    ],
  },
  {
    id: 1,
    name: "Pizza Paradise",
    location: "Mumbai, India",
    rating: 4.7,
    discount: 200,
    image: "/public/RestroImg/pizza.jpg",
    added: false,

    menu: [
      { id: 201, name: "Margherita Pizza", price: 200, added: false },
      { id: 202, name: "Pepperoni Pizza", price: 250, added: false },
      { id: 203, name: "Veg Supreme Pizza", price: 230, added: false },
    ],
  },
  {
    id: 2,
    name: "Dessert Delight",
    location: "Kolkata, India",
    rating: 4.9,
    discount: 150,
    image: "/public/RestroImg/briyaniDesert.png",
    added: false,

    menu: [
      { id: 501, name: "Chocolate Cake", price: 120, added: false },
      { id: 502, name: "Ice Cream Sundae", price: 100, added: false },
      { id: 503, name: "Gulab Jamun", price: 80, added: false },
    ],
  },
  {
    id: 3,
    name: "Burger King",
    location: "Delhi, India",
    rating: 4.5,
    discount: 250,
    image: "/public/RestroImg/burger.png",
    added: false,

    menu: [
      { id: 101, name: "Cheese Burger", price: 120, added: false },
      { id: 102, name: "Veggie Burger", price: 100, added: false },
      { id: 103, name: "Chicken Burger", price: 150, added: false },
    ],
  },
];
export default restaurants;
