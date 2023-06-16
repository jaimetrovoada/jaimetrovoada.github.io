import { AboutMeProps, MetaProps, ProjectProps, WorkProps } from "../types";

export const aboutMe: AboutMeProps = {
  name: "Jaime Trovoada",
  avatar: "/images/avatar.webp",
  occupation: "Full-Stack Developer",
  introduction:
    "I'm a Full-Stack Developer from Sao Tome and Principe. I specialize in building web apps with React and TypeScript. Currently working towards improving my back-end development skills in Go(lang) and NodeJS.\n\n",
  resumeLink:
    "https://github.com/jaimetrovoada/resume/releases/download/v2023.02.05/jaime_trovoada-resume.pdf",
  skills: [
    "JavaScript/TypeScript",
    "React",
    "HTML/CSS/SCSS",
    "NextJS",
    "TailwindCSS",
    "Golang",
    "NodeJS",
    "Rust",
    "Docker",
  ],
  location: "Tianjin, China",
  socials: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jaime-trovoada-5426bb1a2",
    },
    {
      name: "Email",
      link: "mailto:jaimetrovoada@gmail.com",
    },
    {
      name: "GitHub",
      link: "https://github.com/jaimetrovoada",
    },
  ],
};

export const projects: ProjectProps[] = [
  {
    title: "Got Food",
    techStack: "NextJS, TypeScript, NodeJS/Express, PostgresSQL, TypeORM",
    liveLink: "https://got-food-five.vercel.app/",
    githubLink: "https://github.com/jaimetrovoada/got-food",
  },
  {
    title: "Patent Inquiry System",
    /*     description:
      "A fullstack app that allows users to search for a patent and get the patent information, using different parameters.", */
    techStack: "JavaScript/React, NodeJS/Express, MySQL",
    liveLink: "",
    githubLink: "https://github.com/jaimetrovoada/patent-inquiry-system-react",
  },
  {
    title: "GruvIt",
    /*     description:
      "A service that modifies uploaded pictures to the gruvbox color palette with the help of gruvbox-factory python package and then serves it back to the user.", */
    techStack: "TypeScript/React, Go, Docker",
    liveLink: "https://gruvit.netlify.app/",
    githubLink: "https://github.com/jaimetrovoada/gruv-it",
  },
  {
    title: "React Portfolio Template",
    /*     description:
      "A portfolio website template made with React. The template was made based on this website.", */
    techStack: "TypeScript/React",
    liveLink: "",
    githubLink: "https://github.com/jaimetrovoada/react-portfolio-template",
  },
  {
    title: "To-do app",
    /*     description:
      "A to-do app with a simple UI that uses the browser localStorage API to save data.", */
    techStack: "HTML/CSS, JavaScript",
    liveLink: "https://todo-app-j.vercel.app/",
    githubLink: "https://github.com/jaimetrovoada/Todo-App--J-",
  },
  {
    title: "Animal Crossing: New Horizons Wiki",
    /*     description:
      "A simple project using the Animal Crossing New Horizons API, to display information about the various characters and items in the game.", */
    techStack: "JavaScript/React",
    liveLink: "https://a-new-horizon-wiki.vercel.app/",
    githubLink: "https://github.com/jaimetrovoada/A-New-Horizon-Wiki",
  },
  {
    title: "Meal CLI",
    /*     description:
      "A CLI tool to display recipes, using the MealDB API and prompTUI package.", */
    techStack: "Go",
    liveLink: "",
    githubLink: "https://github.com/jaimetrovoada/meal-cli",
  },
  {
    title: "Weather app",
    /*     description:
      "A weather app that uses the OpenWeatherMap API to get weather data.", */
    techStack: "JavaScript/React",
    liveLink: "https://weather-app-plum-eta.vercel.app/",
    githubLink: "https://github.com/jaimetrovoada/weather-app",
  },
  {
    title: "Weather Fetch",
    /*     description: "A CLI tool for fetching system info alongside the weather.", */
    techStack: "TypeScript, NodeJS, Ink",
    liveLink: "",
    githubLink: "https://github.com/jaimetrovoada/weather-fetch",
  },
  {
    title: "Foodtypes",
    /*     description: "A simple API built with a mock database.", */
    techStack: "Go, MySQL",
    liveLink: "",
    githubLink: "https://github.com/jaimetrovoada/foodtypes-golang",
  },
];

export const works: WorkProps[] = [
  {
    company: "北京燃星科技有限公司",
    position: "Junior Frontend Developer",
    period: "August 2021 - April 2022",
    description: "Collaborated in the development of several Web3 projects.",
  },
];

export const meta: MetaProps = {
  title: "Jaime Trovoada",
  description: {
    home: `A full-stack developer, specializing in developing web apps with React and TypeScript`,
    blog: "Jaime's blog",
  },
  keywords: {
    home: "typescript, react, developer, tianjin, china, web developer, frontend developer, full-stack developer",
    blog: "blog, programming",
  },
  image: "/images/avatar.webp",
  type: "website",
};
