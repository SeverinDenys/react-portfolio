import html from "./src/images/html.png";
import css from "./src/images/css.png";
import react from "./src/images/react.png";
import javascript from "./src/images/icons8-javascript.svg";
import git from "./src/images/icons8-git.svg";
import sass from "./src/images/sassIcon.png";
import sass2 from "./src/images/icons8-sass-48.png";
import figma from "./src/images/figma.png";
import firebase from "./src/images/firebaseIcon.png";
import typescript from "./src/images/icons8-typescript.svg";
import tailwind from "./src/images/icons8-tailwind-css-48.png";

import photographyPublic from "./src/images/photographyWebsitePublic.jpg";
import adminPhotography from "./src/images/adminPhotography.jpg";
import gptClone from "./src/images/gpt-clone.jpg";
import contactBook from "./src/images/contact-book.jpg";
import pizzaOrderImg from "./src/images/pizzaOrderImg.jpg";
import bookSearch from "./src/images/bookSearch.jpg";
import weather from "./src/images/weather.jpg";
import movieSearch from "./src/images/movieSearch.jpg";
import journalingApp from "./src/images/journalling_app.jpg";
import recipeApp from "./src/images/recipe-app.png";

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
    title: "SASS",
    imageSrc: sass2,
  },
  {
    title: "TAILWIND",
    imageSrc: tailwind,
  },
  {
    title: "JAVASCRIPT",
    imageSrc: javascript,
  },
  {
    title: "TYPESCRIPT",
    imageSrc: typescript,
  },
  {
    title: "REACT",
    imageSrc: react,
  },
  {
    title: "GIT",
    imageSrc: git,
  },

  {
    title: "FIGMA",
    imageSrc: figma,
  },
];

export const projects = [
  {
    title: "Recipe App",
    imageSrc: recipeApp,
    description:
      " In this project I created The Recipe application built with React, TypeScript, and Tailwind. It allows users to search for recipes, show them in youtube and add them to favorites.",
    skills: [
      {
        imageSrc: html,
      },
      {
        imageSrc: tailwind,
      },
      {
        imageSrc: react,
      },
      {
        imageSrc: git,
      },
      {
        imageSrc: typescript,
      },
    ],
    demo: "https://recipe-app-react-two.vercel.app/",
    source: "https://github.com/SeverinDenys/recipe-app-react",
  },
  {
    title: "Journaling App",
    imageSrc: journalingApp,
    description:
      " In this project I created The Journaling application built with React, TypeScript, and Tailwind. It allows users to create, edit, and manage journal entries in an intuitive and minimalistic interface.",
    skills: [
      {
        imageSrc: html,
      },
      {
        imageSrc: tailwind,
      },
      {
        imageSrc: react,
      },
      {
        imageSrc: git,
      },
      {
        imageSrc: typescript,
      },
    ],
    demo: "https://journaling-app-react-typescript.netlify.app/",
    source:
      "https://github.com/SeverinDenys/journaling-app-react-typescript",
  },
  {
    title: "Photography Website public",
    imageSrc: photographyPublic,
    description:
      "In this project, I created a public  photography website using React, Sass, and Firebase. You as a use can see the ready photography website, based on the data that you uploaded in photography website admin.",
    skills: [
      {
        imageSrc: html,
      },
      {
        imageSrc: sass,
      },
      {
        imageSrc: javascript,
      },
      {
        imageSrc: react,
      },
      {
        imageSrc: git,
      },
      {
        imageSrc: firebase,
      },
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
      {
        imageSrc: html,
      },
      {
        imageSrc: sass,
      },
      {
        imageSrc: javascript,
      },
      {
        imageSrc: react,
      },
      {
        imageSrc: git,
      },
      {
        imageSrc: firebase,
      },
    ],
    demo: "",
    source: "https://github.com/SeverinDenys/photography_website2",
  },
  {
    title: "GPT-clone on React",
    imageSrc: gptClone,
    description:
      "Fun project where I built a GPT-powered chat application using React. I practiced creating a responsive user interface, managing state efficiently, and integrating APIs to provide smooth, interactive conversations. This project helped me enhance my React skills while diving into the world of AI-driven user experiences!",
    skills: [
      {
        imageSrc: html,
      },
      {
        imageSrc: sass,
      },

      {
        imageSrc: react,
      },
      {
        imageSrc: git,
      },
    ],
    demo: "https://gptclonereact.netlify.app/",
    source: "https://github.com/SeverinDenys/GPT-Clone-React",
  },
  {
    title: "Contact Book on React",
    imageSrc: contactBook,
    description:
      "A project where I built a contact book application inspired by the iPhone. I practiced creating a responsive user interface, managing state efficiently, and implementing features like adding, editing, and searching contacts.",
    skills: [
      {
        imageSrc: html,
      },
      {
        imageSrc: sass,
      },

      {
        imageSrc: react,
      },
      {
        imageSrc: git,
      },
    ],
    demo: "https://contactbookiphonecopie.netlify.app/",
    source: "https://github.com/SeverinDenys/contactBook",
  },

  {
    title: "Movie search app on React",
    imageSrc: movieSearch,
    description:
      "A simple project where I built a web application that allows users to search for movies . You can add a movie to your watchlist, check if it was already added, and remove it from the watchlist.",
    skills: [
      {
        imageSrc: html,
      },
      {
        imageSrc: sass,
      },

      {
        imageSrc: react,
      },
      {
        imageSrc: git,
      },
    ],
    demo: "https://serch-movies-react.netlify.app/",
    source:
      "https://github.com/SeverinDenys/movie-search-website-react",
  },
  {
    title: "Pizza&Burger order app on React",
    imageSrc: pizzaOrderImg,
    description:
      "A simple project where I built a web application that allows users to order pizza, burgers, or beer. You can add a specific number of items to the basket, view the total price, remove them from the basket, and complete the order by providing authentication data.",
    skills: [
      {
        imageSrc: html,
      },
      {
        imageSrc: sass,
      },

      {
        imageSrc: react,
      },
      {
        imageSrc: git,
      },
    ],
    demo: "https://pizza-burger-order-app-react.netlify.app/",
    source:
      "https://github.com/SeverinDenys/pizza-burger-order-app-react",
  },
  {
    title: "Search Book on JS",
    imageSrc: bookSearch,
    description:
      "A project where I built a web application that allows users to search for books using the Google Books API. I practiced creating a responsive user interface, managing asynchronous API requests, and implementing features like viewing detailed book descriptions and write comments.",
    skills: [
      {
        imageSrc: html,
      },
      {
        imageSrc: sass,
      },
      {
        imageSrc: javascript,
      },
      {
        imageSrc: git,
      },
    ],
    demo: "https://bookprojectjs.netlify.app/",
    source: "https://github.com/SeverinDenys/book-project",
  },
  {
    title: "Weather App on JS",
    imageSrc: weather,
    description:
      "A project where I built a simple weather web application that allows users to check the current weather by city name using the OpenWeather API.",
    skills: [
      {
        imageSrc: html,
      },
      {
        imageSrc: sass,
      },

      {
        imageSrc: javascript,
      },
      {
        imageSrc: git,
      },
    ],
    demo: "https://severinweatherapp.netlify.app/",
    source: "https://github.com/SeverinDenys/Weather-App",
  },
];
