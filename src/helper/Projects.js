// import React from 'react'
import crypto from "../assets/project-img/crypto.png"
import multimart from "../assets/project-img/maltimart.png"
import travel from "../assets/project-img/travel.png"
import adeBooking from "../assets/project-img/adebooking.png"
import fooder from "../assets/project-img/fooder.png"
import spooky from "../assets/project-img/spooky.png"
import bas from "../assets/project-img/bas.png"
import brit from "../assets/project-img/brit.png"
import freelanceMedic from "../assets/project-img/freelance-medic.png"
import britLandBanking from "../assets/project-img/brit-land.png" 
// import ART1 from "../assets/arrMethod.png"
// import ART2 from "../assets/restFul.png"
// import ART3 from "../assets/started-express.png"
// import ART4 from "../assets/started-node.png"
// import ART5 from "../assets/scope.png"




export const projectsArray = [

  // {
  //   // id: "01",
  //   projectName: "Freelance Medic",
  //   imgUrl: IMG10,
  //   desc: "Get connected with top-rated medical facilities across the country, with a regularly updated database, so you can find he right asignment",
  //   webUrl: "https://freelance-medic.onrender.com",
  //   gitHub: "https://freelance-medic.onrender.com",
  //   stacks: ["ReactJS", "Redux-Toolkit"],
  // },
  {
    id: 0,
    projectName: "Brit Properties LTD",
    imgUrl: brit,
    desc: "Official website for Brit Properties Nigeria Ltd, a real estate company primarily based in lagos.",
    webUrl: "https://brit-react.onrender.com/",
    gitHub: "https://brit-react.onrender.com/",
    stacks: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Django"],
  },
  {
    id: 1,
    projectName: "AdeBookings",
    imgUrl: adeBooking,
    desc: "Adebookings is a booking web application solution for hotels/moteals. users can search for available properties in specified locations(abuja, lagos or bayelsa), filter based on price, input booking date, check for availablity and book a room in the hotel. single hotel page also features a carousel that displays more pictures of the selected property/hotel. backend consists of an application programming interface(API) that connects to a MongoDB database, it uses cookies and JsonWebToken for authentication",
    webUrl: "https://hotel-booking-web-app.onrender.com",
    gitHub: "https://github.com/AdewoleCode/booking-web-app-MERN",
    stacks: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Redux-Toolkit", "React-date-range", "BcryptJS", "JsonWebToken"],
  },
  {
    id: 2,
    projectName: "Travelify",
    imgUrl: travel,
    desc: "Travelify is a social media web application where users can share their travel stories. all users can view travel diaries but only authenticated/registered users can create a diary entry, edit diary or delete diary",
    webUrl: "https://travel-diary-app-frontendd.onrender.com",
    gitHub: "https://github.com/AdewoleCode/mern-travel-blog",
    stacks: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Redux-Toolkit", "BcryptJS", "Material UI/Material UI Icons"],
  },
  {
    id: 3,
    projectName: "Freelance Medic",
    imgUrl: freelanceMedic,
    desc: "Get connected with top-rated medical facilities across the country, with a regularly updated database, so you can find he right asignment",
    webUrl: "https://freelance-medic.onrender.com",
    gitHub: "https://freelance-medic.onrender.com",
    stacks: ["ReactJS", "Redux-Toolkit"],
  },
  {
    id: 4,
    projectName: "Fooder",
    imgUrl: fooder,
    desc: "Fooder is food ordering web Application solution that makes ordering of food straightforward and easy, users can choose from a list of food categories, add food to cart, increase/decrease quantity of food items and checkout if they are registered/authenticated. Fooder also features an admin page to create and add a food item to the database. backend is an express API that connects to MongoDB database and it uses JsonWebToken for authentication",
    webUrl: "https://fooderss-frontend.onrender.com",
    gitHub: "https://github.com/AdewoleCode/fooders",
    stacks: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Redux-Toolkit", "BcryptJS", "JsonWebToken"],
  },
  {
    id: 5,
    projectName: "Brit Land Banking",
    imgUrl: britLandBanking,
    desc: "Official website for Brit Land Banking, a subsidiary of Brit Properties Nigeria Limited.",
    webUrl: "https://brit-land-banking.onrender.com/",
    gitHub: "https://brit-land-banking.onrender.com/",
    stacks: ["viteJS", "NodeJS", "EmailJS"],
  },
  {
    id: 6,
    projectName: "Spooky",
    imgUrl: spooky,
    desc: "Spooky is a real time chat app with a stylish, modern design that uses socket.io for message exchanges. users can also select from a list of dynamically generated avatars from api.multiavatar.com as avatar.",
    webUrl: "https://spooky-chat-app.onrender.com",
    gitHub: "https://github.com/AdewoleCode/sp00kky-chat-fullstack-node-and-react",
    stacks: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Redux-Toolkit", "BcryptJS", "Socket.io"],
  },
  {
    id: 7,
    projectName: "bStores",
    imgUrl: bas,
    desc: "an ecommerce store for children wears. users can add items to cart, increase quantity of items, visit a single item page, checkout. app also features stripe payment solution. backend is an headless cms that helps make ecomerce content much easier to manage",
    webUrl: "https://iyaibro.onrender.com",
    gitHub: "https://github.com/AdewoleCode/basirat-children-stores",
    stacks: ["ReactJS", "strapi", "React-Carousel", "sql-Lite", "Redux-Toolkit", "Material UI"],
  },
  {
    id: 8,
    projectName: "Coin Search",
    imgUrl: crypto,
    desc: "A crypto website with a easy to use, modern UI where any crypto enthusiast can go to check for crypto prices, current values, brief history, market ranks and more..",
    webUrl: "https://crypto-web-3waw.onrender.com",
    gitHub: "https://github.com/AdewoleCode/cypto-web-app",
    stacks: ["reactJS", "crypto Api", "TailwindCss"],
  },
  {
    id: 9,
    projectName: "Multimart",
    imgUrl: multimart,
    desc: "A fully functioning E-commerce store with a nice, modern, easy to navigate User interface. users can add item to cart, filter or search for a particular products, create an account, checkout....",
    webUrl: "https://maltimartstore.netlify.app",
    gitHub: "https://github.com/AdewoleCode/Ecommerce-project",
    stacks: ["ReactJS", "Redux Toolkit", "Firebase"],
  },
  // {
  //   // id: "03",
  //   projectName: "Travel Naija ",
  //   imgUrl: IMG3,
  //   desc: "A Landing page designed for a traveling agency company, page also features light and dark mode.",
  //   webUrl: "https://travelnaija.netlify.app/",
  //   gitHub: "https://github.com/Robinhood1712/travelNaija",
  //   stacks: ["html", "css", "javascript"],
  // },
  // {
  //   projectName: "previous portfolio website",
  //   imgUrl: IMGPORT,
  //   desc: "previous porfolio webpage that contains some of my old projects",
  //   webUrl: "https://adewole-port.netlify.app/",
  //   gitHub: "https://github.com/Robinhood1712/",
  //   stacks: ["html", "css", "javascript"],
  // },
];


export const ArticlesData = [
  // {
  //   name: "5 must-know Array Methods in JavaScript",
  //   img: ART1,
  //   Url: "https://dev.to/adewolecode/5-must-know-array-methods-in-javascript-1l27"
  // },
  // {
  //   name: "Understanding the Concept of Scope in JavaScript ",
  //   img: ART5,
  //   Url: "https://dev.to/adewolecode/understanding-the-concept-of-scope-in-javascript-g7l"
  // },
  // {
  //   name: "How to build a RESTful crud API with ExpressJS and mongoDB Database for newbies ",
  //   img: ART2,
  //   Url: "https://dev.to/adewolecode/how-to-build-a-restful-crud-api-with-expressjs-and-mongodb-database-for-newbies-g8h"
  // },
  // {
  //   name: "Getting Started With ExpressJS For Backend Development",
  //   img: ART3,
  //   Url: "https://adewolecode.hashnode.dev/getting-started-with-expressjs-for-backend-development"
  // },
  // {
  //   name: "Getting Started With NodeJS as an Absolute Backend Newbie",
  //   img: ART4,
  //   Url: "https://adewolecode.hashnode.dev/getting-started-with-nodejs-as-an-absolute-backend-newbiehttpshashnodecom"
  // }
]

