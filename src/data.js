import tour1 from "./images/kel-suu.jpg";
import tour2 from "./images/sary-chelek.jpg";
import tour3 from "./images/chatyr-kol.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com/silkroadexplore",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://twitter.com/exploresilkroad",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.instagram.com/silkroadexplore/",
    icon: "fab fa-instagram",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Early bookings for group tours are eligible for 5% discounts. The 4 first Bookings are eligible for a discount.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless climbing",
    text: "We offer unique programs - guaranteed expeditions to Lenin Peak and Khan Tengri, which will take place with a group of any size.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "If you wish to have a private room, if you are vegetarian, vegan or you have a specific diet, let us know before making your reservation.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Miraculous Kel Suu",
    text: "Lake Kel Suu is a small lake bound between stark cliffs near the Chinese border. Its vivid turquoise waters are located in the Sary-Beles Mountains and are only accessible from July to August. Lake Kel Suu's reclusive position and mysterious cliff-side caves appear as a beautiful enigma.",
    location: "Naryn",
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "Untamed Sary Chelek",
    text: "The Sary Chelek Biosphere contains 1000+ species of plants, 160 bird species, and 34 different mammals, the most famous of which is the endangered snow leopard. It's crisp blue-green waters wink in the sunlight as it sprawls untamed over its wild domain.",
    location: "Chatkal",
    duration: 6,
    price: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "Celestial Chatyr Kul",
    text: "Lake Chatyr Kul is perched high in the sky at an elevation of 3530m, making it Kyrgyzstan's highest alpine lake. Its waters resemble a shade of greenish-yellow and the area around the lake is home to Marco Polo Sheep and many rare bird species.",
    location: "At-Bashi",
    duration: 8,
    price: 5000,
  },
];
