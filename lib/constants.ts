export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Combo Meal",
    description:
      "A hearty combination of grilled chicken inasal and pork liempo served with rice and vegetables",
    price: 28.8,
    image: "/menu/combo.jpg",
    category: "Main",
  },
  {
    id: "2",
    name: "Chicken Inasal",
    description:
      "Grilled marinated chicken, tender and flavorful with tangy and garlicky notes",
    price: 22.6,
    image: "/menu/inasal.jpg",
    category: "Main",
  },
  {
    id: "3",
    name: "Pork Liempo",
    description:
      "Grilled pork belly , so tendy and juicy marinated in our special sauce.",
    price: 22.6,
    image: "/menu/liempo.jpg",
    category: "Main",
  },
  {
    id: "4",
    name: "Chicken Sigsig Meal",
    description:
      "Sizzling chicken sisig served with rice, perfectly seasoned and grilled",
    price: 18.7,
    image: "/menu/chickensigsig.jpg",
    category: "Special",
  },
  {
    id: "5",
    name: "Pork Sigsig",
    description:
      "Sizzling pork sisig with onions and chili, served on a hot plate",
    price: 18.7,
    image: "/menu/porksigsig.jpg",
    category: "Special",
  },
  {
    id: "6",
    name: "Special",
    description:
      "Our Special – A delicious surprise that changes daily! Be sure to check back for today's unique creation.",
    price: 0,
    image: "/menu/specialmeal.png",
    category: "Special",
  },
  {
    id: "7",
    name: "Filo Hot Dog",
    description:
      "Filipino-style hot dog on a stick, grilled to perfection with our signature marinade",
    price: 12.0,
    image: "/menu/hotdog.jpg",
    category: "Side",
  },
  {
    id: "8",
    name: "Pork Skewers",
    description: "Sweet and savory pork skewers grilled to perfection",
    price: 16.7,
    image: "/menu/porkskewers.jpg",
    category: "Side",
  },
];

export const openingHours = {
  monday: { open: "11:00 AM", close: "9:00 PM", closed: false },
  tuesday: { open: "11:00 AM", close: "9:30 PM", closed: false },
  wednesday: { open: "11:00 AM", close: "9:30 PM", closed: false },
  thursday: { open: "11:00 AM", close: "9:30 PM", closed: false },
  friday: { open: "11:00 AM", close: "9:30 PM", closed: false },
  saturday: { open: "11:00 AM", close: "9:30 PM", closed: false },
  sunday: { open: "11:00 AM", close: "9:00 PM", closed: false },
};

export const contactInfo = {
  phone: "0210 815 6604",
  email: "marcuelofoodcorp.mjci@gmail.com",
  address: "106 Ponsonby Road, Ponsonby, Auckland 1011",
};

export const socialLinks = {
  facebook:
    "https://www.facebook.com/p/Mang-Joes-Chicken-Inasal-NZ-100063472661717/",
  instagram: "https://instagram.com/mangjoes",
  twitter: "https://twitter.com/mangjoes",
};

export const aboutStory = {
  title: "Our Story",
  content: `Mang Joe's Chicken Inasal brings authentic Filipino BBQ flavors to your neighborhood. 

What started as a family passion for traditional Filipino grilling has become a beloved local spot where friends and families gather to enjoy the warm, smoky, and vibrant tastes of the Philippines.

Our secret marinade, passed down through generations, gives our chicken its signature tangy and garlicky flavor. Each dish is grilled fresh to order, ensuring that perfect char and juiciness that makes Filipino BBQ so special.

At Mang Joe's, we believe food brings people together. Every meal is made with love, honoring the recipes and techniques that have been cherished in Filipino homes for generations.`,

  values: [
    "Authentic Filipino Recipes",
    "Fresh Ingredients Daily",
    "Family-Friendly Atmosphere",
    "Passion for Great Food",
  ],
};
