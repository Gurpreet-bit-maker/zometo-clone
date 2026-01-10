const restaurants = [
  // ================= DINING =================
  {
    id: 1,
    category: "dining",
    name: "Biryani House",
    location: "Hyderabad, India",
    rating: 4.8,
    discount: 180,
    image: "/public/RestroImg/image1.png",
    added: false,
    menu: [
      { id: 101, name: "Chicken Biryani", price: 180, added: false },
      { id: 102, name: "Mutton Biryani", price: 250, added: false },
      { id: 103, name: "Veg Biryani", price: 150, added: false },
    ],
  },
  {
    id: 2,
    category: "dining",
    name: "Punjabi Tandoor",
    location: "Delhi, India",
    rating: 4.6,
    discount: 200,
    image: "/public/RestroImg/tandoor.jpg",
    added: false,
    menu: [
      { id: 104, name: "Butter Chicken", price: 220, added: false },
      { id: 105, name: "Paneer Tikka", price: 180, added: false },
    ],
  },
  {
    id: 3,
    category: "dining",
    name: "South Spice",
    location: "Chennai, India",
    rating: 4.5,
    discount: 150,
    image: "/public/RestroImg/southind.jpg",
    added: false,
    menu: [
      { id: 106, name: "Masala Dosa", price: 90, added: false },
      { id: 107, name: "Idli Sambhar", price: 70, added: false },
    ],
  },

  // ================= BOOKING =================
  {
    id: 4,
    category: "booking",
    name: "Royal Fine Dine",
    location: "Mumbai, India",
    rating: 4.9,
    discount: 300,
    image: "/public/RestroImg/finedine.png",
    added: false,
    tableBooking: true,
    menu: [
      { id: 201, name: "Grilled Salmon", price: 650, added: false },
      { id: 202, name: "Pasta Alfredo", price: 420, added: false },
    ],
  },
  {
    id: 5,
    category: "booking",
    name: "Sky Lounge",
    location: "Bangalore, India",
    rating: 4.7,
    discount: 250,
    image: "/public/RestroImg/lounge.png",
    added: false,
    tableBooking: true,
    menu: [
      { id: 203, name: "Mocktail Platter", price: 300, added: false },
      { id: 204, name: "Cheese Nachos", price: 280, added: false },
    ],
  },
  {
    id: 6,
    category: "booking",
    name: "The Terrace",
    location: "Pune, India",
    rating: 4.6,
    discount: 220,
    image: "/public/RestroImg/terrace.png",
    added: false,
    tableBooking: true,
    menu: [{ id: 205, name: "BBQ Platter", price: 550, added: false }],
  },

  // ================= ONLINE ORDER =================
  {
    id: 7,
    category: "online",
    name: "Pizza Paradise",
    location: "Mumbai, India",
    rating: 4.7,
    discount: 200,
    image: "/public/online/pizza.jpg",
    added: false,
    deliveryTime: "30 mins",
    description:
    "Pizza Paradise is a well-known pizza restaurant located in Mumbai, India. Famous for its cheesy and flavorful pizzas, this place offers freshly baked pizzas made with premium ingredients. With a high customer rating and quick delivery, Pizza Paradise is a perfect choice for family meals, parties, and late-night pizza cravings.",
    menu: [
      { id: 301, name: "Margherita Pizza", price: 200, added: false },
      { id: 302, name: "Farmhouse Pizza", price: 260, added: false },
    ],
  },
  {
    id: 8,
    category: "online",
    name: "Burger King",
    location: "Delhi, India",
    rating: 4.5,
    discount: 150,
    image: "/public/online/burgerkink.jpg",
    added: false,
    deliveryTime: "25 mins",
    description:
      "Burger King is a globally popular fast-food restaurant located in Delhi, India. Known for its flame-grilled burgers, crispy fries, and refreshing beverages, this outlet delivers great taste with consistent quality. It is an ideal option for quick meals, casual dining, and satisfying burger cravings with fast and reliable delivery.",
    menu: [
      { id: 303, name: "Cheese Burger", price: 120, added: false },
      { id: 304, name: "Chicken Burger", price: 150, added: false },
    ],
  },
  {
    id: 9,
    category: "online",
    name: "Chinese Wok",
    location: "Noida, India",
    rating: 4.4,
    discount: 170,
    image: "/public/online/chines.jpeg",
    added: false,
    deliveryTime: "35 mins",
    description:
    "Chinese Wok is a popular restaurant in Noida, India, serving delicious and authentic Chinese cuisine. Known for its flavorful noodles, spicy Manchurian, and fresh ingredients, this restaurant is loved by Chinese food enthusiasts. With generous portions and timely delivery, it is a great choice for lunch and dinner orders.",
    menu: [
      { id: 305, name: "Hakka Noodles", price: 140, added: false },
      { id: 306, name: "Manchurian", price: 160, added: false },
    ],
  },

  // ================= DESSERTS =================
  {
    id: 10,
    category: "online",
    name: "Dessert Delight",
    location: "Kolkata, India",
    rating: 4.9,
    discount: 120,
    image: "/public/online/kobby-mendez-q54Oxq44MZs-unsplash (1).jpg",
    added: false,
    deliveryTime: "20 mins",
    menu: [
      { id: 401, name: "Chocolate Cake", price: 120, added: false },
      { id: 402, name: "Ice Cream Sundae", price: 100, added: false },
      { id: 403, name: "Gulab Jamun", price: 80, added: false },
    ],
  },
];

export default restaurants;
