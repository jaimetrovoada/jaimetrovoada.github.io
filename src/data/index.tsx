import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
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
  introduction:
    'Gamer, and a big enthusiast of all thigns tech. Looking to contribute to open source projects and learn new things. I use Arch, btw.',
  resumeLink: 'https://drive.google.com/file/d/1oLe-4MbWdQLsIQ953fRiFXdqT7wNad3e/view?usp=sharing',
  skills: ['JavaScript/TypeScript', 'React + Redux', 'Golang', 'Rust (learning)', 'CyberSec (learning)'],
  location: 'Beijing, CN',
  socials: [
    {
      name: 'Instagram',
      icon: <InstagramIcon color="inherit" />,
      link: 'https://instagram.com/jaimetrovoada',
    },
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
      link: 'https://gituhb.com/jaimetrovoada',
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
    title: 'React Portfolio Template (WIP)',
    description: 'A portfolio website template made with React. The template was made based on this website.',
    techStack: 'TypeScript/React',
    liveLink: '',
    githubLink: 'https://github.com/jaimetrovoada/react-portfolio-template',
  },
  {
    title: 'Patent Inquiry System',
    description:
      'A fullstack app that allows users to search for a patent and get the patent information, using different parameters.',
    techStack: 'JavaScript/React, NodeJS/Express, MySQL',
    liveLink: '',
    githubLink: 'https://github.com/jaimetrovoada/patent-inquiry-system-react',
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
    title: 'Image Uploader (WIP)',
    description: 'A image uploading service.',
    techStack: 'TypeScript/React, Go',
    liveLink: '',
    githubLink: 'https://github.com/jaimetrovoada/image-uploader',
  },
  {
    title: 'To-do app',
    description: 'An to-do app with a simple UI that uses the browser localStorage API to save data.',
    techStack: 'HTML/CSS, JavaScript',
    liveLink: 'https://todo-app-j.vercel.app/',
    githubLink: 'https://github.com/jaimetrovoada/Todo-App--J-',
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
    description: '',
  },
]
