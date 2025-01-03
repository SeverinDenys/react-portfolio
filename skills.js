import html from "./src/images/html.png";
import css from "./src/images/css.png";
import react from "./src/images/react.png";
import javascript from "./src/images/icons8-javascript.svg";
import git from "./src/images/icons8-git.svg";
import figma from "./src/images/figma.png";

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
    title: "Project A",
    imageSrc: "",
    description:
      "This is a simple app built to help you learn the basics of web development using HTML, CSS, and React. You'll practice creating a responsive layout and interactive features.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    demo: "https://www.example.com",
    source: "https://www.github.com",
  },

  {
    title: "Project C",
    imageSrc: "",
    description:
      "In this project, you'll learn how to build a web app using HTML, CSS, JavaScript, and React. It's a great way to practice creating user interfaces and adding dynamic content to your site.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    demo: "https://www.example.com",
    source: "https://www.github.com",
  },
  {
    title: "GPT-clone on React",
    imageSrc: "./src/images/gpt-clone.jpg",
    description:
      "A fun project where I built a GPT-powered chat application using React. I practiced creating a responsive user interface, managing state efficiently, and integrating APIs to provide smooth, interactive conversations. This project helped me enhance my React skills while diving into the world of AI-driven user experiences!",
    skills: ["HTML", "SCSS", "React", "GIT", "GITHUB"],
    demo: "https://gptclonereact.netlify.app/",
    source: "https://github.com/SeverinDenys/GPT-Clone-React",
  },
  {
    title: "Contact Book on React",
    imageSrc: "./src//images/contact-book.jpg",
    description:
      "A project where I built a contact book application inspired by the iPhone. I practiced creating a responsive user interface, managing state efficiently, and implementing features like adding, editing, and searching contacts.",
    skills: ["HTML", "SCSS", "React", "GIT", "GITHUB"],
    demo: "https://contactbookiphonecopie.netlify.app/",
    source: "https://github.com/SeverinDenys/contactBook",
  },
  {
    title: "Search Book on JS",
    imageSrc: "./src//images/bookSearch.jpg",
    description:
      "A project where I built a web application that allows users to search for books using the Google Books API. I practiced creating a responsive user interface, managing asynchronous API requests, and implementing features like viewing detailed book descriptions and interacting with comments.",
    skills: ["HTML", "SCSS", "JS", "GIT", "GITHUB"],
    demo: "https://bookprojectjs.netlify.app/",
    source: "https://github.com/SeverinDenys/book-project",
  },
  {
    title: "Weather App on JS",
    imageSrc: "./src//images/weather.jpg",
    description:
      "A project where I built a simple weather web application that allows users to check the current weather by city name using the OpenWeather API.",
    skills: ["HTML", "SCSS", "JS", "GIT", "GITHUB"],
    demo: "https://severinweatherapp.netlify.app/",
    source: "https://github.com/SeverinDenys/Weather-App",
  },
];
