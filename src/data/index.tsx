import React from 'react'
// import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import GitHubIcon from '@mui/icons-material/GitHub'

interface AboutMeProps {
  name: string
  avatar?: string
  occupation?: string
  resumeLink?: string
  introduction: string
  skills: string[]
  location?: string
  socials: SocialProps[]
}

interface SocialProps {
  name: String
  link: string
  icon: any
}

export const aboutMe: AboutMeProps = {
  name: 'Jaime Trovoada',
  avatar: '/images/avatar.webp',
  occupation: 'Frontend Developer',
  introduction: `I\'m a Frontend Developer, with one year of professional experience. I mainly work with React and I\'m currently learning Backend development with Go.\n\n


    My goal is to build beautiful and performant web applications, further develop my skills, and collaborate with others.
    `,
  resumeLink: 'https://github.com/jaimetrovoada/resume/blob/main/resume.pdf',
  skills: ['JavaScript/TypeScript', 'React', 'HTML/CSS/SCSS', 'Golang', 'NodeJS', 'Rust'],
  location: 'Tianjin, China',
  socials: [
    // {
    //   name: 'Instagram',
    //   icon: <InstagramIcon color="inherit" />,
    //   link: 'https://instagram.com/jaimetrovoada',
    // },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon color="inherit" />,
      link: 'https://www.linkedin.com/in/jaime-trovoada-5426bb1a2',
    },
    {
      icon: <AlternateEmailIcon color="inherit" />,
      name: 'Email',
      link: 'mailto:jaimetrovoada@gmail.com',
    },
    {
      icon: <GitHubIcon color="inherit" />,
      name: 'GitHub',
      link: 'https://github.com/jaimetrovoada',
    },
  ],
}

interface ProjectProps {
  title: string
  description?: string
  techStack: string
  liveLink?: string
  githubLink: string
}

export const projects: ProjectProps[] = [
  {
    title: 'Patent Inquiry System',
    description:
      'A fullstack app that allows users to search for a patent and get the patent information, using different parameters.',
    techStack: 'JavaScript/React, NodeJS/Express, MySQL',
    liveLink: '',
    githubLink: 'https://github.com/jaimetrovoada/patent-inquiry-system-react',
  },
  {
    title: 'GruvIt (WIP)',
    description:
      'A service that modifies uploaded pictures to the gruvbox color palette with the help of gruvbox-factory python package and then serves it back to the user.',
    techStack: 'TypeScript/React, Go',
    liveLink: '',
    githubLink: 'https://github.com/jaimetrovoada/image-uploader',
  },
  {
    title: 'React Portfolio Template',
    description: 'A portfolio website template made with React. The template was made based on this website.',
    techStack: 'TypeScript/React',
    liveLink: '',
    githubLink: 'https://github.com/jaimetrovoada/react-portfolio-template',
  },
  {
    title: 'To-do app',
    description: 'A to-do app with a simple UI that uses the browser localStorage API to save data.',
    techStack: 'HTML/CSS, JavaScript',
    liveLink: 'https://todo-app-j.vercel.app/',
    githubLink: 'https://github.com/jaimetrovoada/Todo-App--J-',
  },
  {
    title: 'Animal Crossing: New Horizons Wiki',
    description:
      'A simple project using the Animal Crossing New Horizons API, to display information about the various characters and items in the game.',
    techStack: 'JavaScript/React',
    liveLink: 'https://a-new-horizon-wiki.vercel.app/',
    githubLink: 'https://github.com/jaimetrovoada/A-New-Horizon-Wiki',
  },
  {
    title: 'Meal CLI',
    description: 'A CLI tool to display recipes, using the MealDB API and prompTUI package.',
    techStack: 'Go',
    liveLink: '',
    githubLink: 'https://github.com/jaimetrovoada/meal-cli',
  },
  {
    title: 'Weather app',
    description: 'A weather app that uses the OpenWeatherMap API to get weather data.',
    techStack: 'JavaScript/React',
    liveLink: 'https://weather-app-plum-eta.vercel.app/',
    githubLink: 'https://github.com/jaimetrovoada/weather-app',
  },
  {
    title: 'Weather Fetch (WIP)',
    description: 'A CLI tool for fetching system info alongside the weather.',
    techStack: 'TypeScript, NodeJS, Ink',
    liveLink: '',
    githubLink: 'https://github.com/jaimetrovoada/weather-fetch',
  },
  {
    title: 'Foodtypes',
    description: 'A simple API built with a mock database.',
    techStack: 'Go, MySQL',
    liveLink: '',
    githubLink: 'https://github.com/jaimetrovoada/foodtypes-golang',
  },
]

interface WorkProps {
  company: string // name of the company
  position: string // position in the company
  period: string // period of time in the company
  description: string // optional, description of the work
}

export const works: WorkProps[] = [
  {
    company: '北京燃星科技有限公司',
    position: 'Junior Frontend Developer',
    period: 'August 2021 - April 2022',
    description: `Build the frontend and implement features for several Web3 realted projects;`,
  },
]
