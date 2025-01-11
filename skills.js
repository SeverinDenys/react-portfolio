import html from "./src/images/html.png";
import css from "./src/images/css.png";
import react from "./src/images/react.png";
import javascript from "./src/images/icons8-javascript.svg";
import git from "./src/images/icons8-git.svg";
import figma from "./src/images/figma.png";

import photographyPublic from "./src/images/photographyWebsitePublic.jpg";
import adminPhotography from "./src/images/adminPhotography.jpg";
import gptClone from "./src/images/gpt-clone.jpg";
import contactBook from "./src/images/contact-book.jpg";
import pizzaOrderImg from "./src/images/pizzaOrderImg.jpg";
import bookSearch from "./src/images/bookSearch.jpg";
import weather from "./src/images/weather.jpg";

export const skills = [
  {
    title: "HTML",
    imageSrc: html,
  },
  {
    title: "CSS",
    imageSrc: css,
  },
  {
    title: "Javascript",
    imageSrc: javascript,
  },
  {
    title: "React",
    imageSrc: react,
  },
  {
    title: "Git",
    imageSrc: git,
  },

  {
    title: "Figma",
    imageSrc: figma,
  },
];

export const projects = [
  {
    title: "Photography Website public",
    imageSrc: photographyPublic,
    description:
      "In this project, I created a public  photography website using React, Sass, and Firebase. You as a use can see the ready photography website, based on the data that you uploaded in photography website admin.",
    skills: [
      "HTML",
      "Sass",
      "JavaScript",
      "React",
      "Git",
      "Github",
      "Firebase database",
    ],
    demo: "",
    source: "https://github.com/SeverinDenys/photography_website1",
  },

  {
    title: "Photography Website admin",
    imageSrc: adminPhotography,
    description:
      "In this project, you'll build an admin panel for managing photography website using React, Sass, and Firebase. You'll practice user authentication, uploading and organizing pictures into folders, adding metadata.",
    skills: [
      "HTML",
      "Sass",
      "JavaScript",
      "React",
      "Git",
      "Github",
      "Firebase database",
    ],
    demo: "",
    source: "https://github.com/SeverinDenys/photography_website2",
  },
  {
    title: "GPT-clone on React",
    imageSrc: gptClone,
    description:
      "Fun project where I built a GPT-powered chat application using React. I practiced creating a responsive user interface, managing state efficiently, and integrating APIs to provide smooth, interactive conversations. This project helped me enhance my React skills while diving into the world of AI-driven user experiences!",
    skills: ["Html", "Scss", "React", "Git", "Github"],
    demo: "https://gptclonereact.netlify.app/",
    source: "https://github.com/SeverinDenys/GPT-Clone-React",
  },
  {
    title: "Contact Book on React",
    imageSrc: contactBook,
    description:
      "A project where I built a contact book application inspired by the iPhone. I practiced creating a responsive user interface, managing state efficiently, and implementing features like adding, editing, and searching contacts.",
    skills: ["Html", "Scss", "React", "Git", "Github"],
    demo: "https://contactbookiphonecopie.netlify.app/",
    source: "https://github.com/SeverinDenys/contactBook",
  },

  {
    title: "Pizza&Burger order app on React",
    imageSrc: pizzaOrderImg,
    description:
      "A simple project where I built a web application that allows users to order pizza, burgers, or beer. You can add a specific number of items to the basket, view the total price, remove them from the basket, and complete the order by providing authentication data.",
    skills: ["Html", "Scss", "React"],
    demo: "https://pizza-burger-order-app-react.netlify.app/",
    source:
      "https://github.com/SeverinDenys/pizza-burger-order-app-react",
  },
  {
    title: "Search Book on JS",
    imageSrc: bookSearch,
    description:
      "A project where I built a web application that allows users to search for books using the Google Books API. I practiced creating a responsive user interface, managing asynchronous API requests, and implementing features like viewing detailed book descriptions and write comments.",
    skills: ["Html", "Scss", "Js", "Git", "Github"],
    demo: "https://bookprojectjs.netlify.app/",
    source: "https://github.com/SeverinDenys/book-project",
  },
  {
    title: "Weather App on JS",
    imageSrc: weather,
    description:
      "A project where I built a simple weather web application that allows users to check the current weather by city name using the OpenWeather API.",
    skills: ["Html", "Scss", "Js", "Git", "Github"],
    demo: "https://severinweatherapp.netlify.app/",
    source: "https://github.com/SeverinDenys/Weather-App",
  },
];
