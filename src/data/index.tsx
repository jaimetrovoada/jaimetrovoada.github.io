import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

interface AboutMeProps {
  name: string // your name or nickname, also use for the header
  avatar?: string // url of the person's avatar
  occupation?: string // your job tittle or your current occupation
  resumeLink?: string // optional, link to the person's resume
  introduction: string // introduction of the person
  skills: string[] // skills of the person
  location?: string // optional, location of the person
  funFact?: {
    // optional, a fun fact about the person
    title: string // title of the fun fact
    description: string // description of the fun fact
  }
}

export const aboutMe: AboutMeProps = {
  name: 'Jaime Trovoada',
  avatar: '/images/avatar.png',
  occupation: 'Frontend Developer (Web3)',
  introduction: '',
  resumeLink: 'drive.google.com',
  skills: ['JavaScript', 'TypeScript', 'React'],
  location: 'Beijing, CN',
  funFact: {
    title: 'Favorite Sports Car',
    description:
      'Audi R8. \nWhy? Because when I played Need For Speed: Shift on the PlayStation Portable it was the car that got me through most of the game. \nAnd also because it looks really cool!!!',
  },
}

interface ProjectProps {
  title: string // Project title
  description?: string // optional, description of the project
  techStack: string // comma separated list of technologies used in the project
  liveLink?: string // optional, link to a live demo of the project
  githubLink: string // link to the project's github repository
}

export const projects: ProjectProps[] = [
  {
    title: 'To-do app',
    description: '',
    techStack: '',
    liveLink: '',
    githubLink: '',
  },
  {
    title: 'Weather app',
    description: '',
    techStack: '',
    liveLink: '',
    githubLink: '',
  },
]

interface SocialProps {
  name: String // name of the social media/platform
  link: string // link to your social media/platform profile
  icon: any // icon of the social media/platform
}

export const socials: SocialProps[] = [
  {
    name: 'Instagram',
    icon: <InstagramIcon />,
    link: '',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedInIcon />,
    link: '',
  },
  {
    icon: <AlternateEmailIcon />,
    name: 'email',
    link: 'mailto:jaimetrovoada@gmail.com',
  },
]
