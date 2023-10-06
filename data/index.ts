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
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "SCSS",
    "NextJS",
    "TailwindCSS",
    "Golang",
    "NodeJS",
    "Rust",
    "Docker",
  ],
  location: "Lisbon, Portugal",
  email: "jaimetrovoada@gmail.com",
  socials: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jaimetrovoada",
    },
    {
      name: "GitHub",
      link: "https://github.com/jaimetrovoada",
    },
  ],
};

export const works: WorkProps[] = [
  {
    company: "北京燃星科技有限公司",
    position: "Junior Frontend Developer",
    period: "August 2021 - August 2022",
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
