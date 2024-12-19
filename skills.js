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

export const history = [
  {
    role: "Software Engineer",
    organisation: "Google",
    startDate: "Sept, 2022",
    endDate: "Present",
    experiences: [
      "Worked on Google Maps",
      "Reduced load times by 50%",
    ],
    imageSrc: "",
  },
  {
    role: "UI Designer",
    organisation: "Mirosoft",
    startDate: "Aug, 2021",
    endDate: "Aug, 2022",
    experiences: [
      "Worked on Windows 10",
      "Designed the control panel",
    ],
    imageSrc: "",
  },
  {
    role: "SWE Intern",
    organisation: "Netflix",
    startDate: "Apr, 2020",
    endDate: "Jun, 2020",
    experiences: [
      "Worked on component library",
      "Helped create UI components",
    ],
    imageSrc: "",
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
    title: "Project B",
    imageSrc: "",
    description:
      "A fun project to practice web development skills like HTML, CSS, SCSS, and React. You'll learn how to style websites and create a smooth, interactive user experience.",
    skills: ["HTML", "CSS", "SCSS", "React", "JavaScript"],
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
];
