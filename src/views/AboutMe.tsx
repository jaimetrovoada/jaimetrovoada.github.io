import React from 'react'
import { Section } from '../components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { aboutMe } from '../data'
import Link from '@mui/material/Link'

const Home: React.FC = () => {
  return (
    <Section
      sectionTitle="About Me"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '>div:not(last-child)': {
          marginBottom: '1rem',
        },
      }}
    >
      <Box>
        <Typography>
          {aboutMe.introduction.split('\n').map((newLine, index) => {
            return <p key={index}>{newLine}</p>
          })}
        </Typography>
      </Box>
      <Box>
        <Typography>
          My skills include:{' '}
          {aboutMe.skills.map((skill, index) => {
            return (
              <span key={index}>
                {skill}
                {index !== aboutMe.skills.length - 1 ? ', ' : ''}
              </span>
            )
          })}
        </Typography>
        <Typography>
          Here is where you can find my{' '}
          <Link href={aboutMe.resumeLink} target="_blank" rel="noopener">
            resume
          </Link>
        </Typography>
      </Box>
      <Box>
        <Typography>If you want to reach out, here is where to find me:</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {aboutMe.socials.map((social, index) => {
            return (
              <Link
                href={social.link}
                rel="noopener noreferrer"
                target="_blank"
                key={index}
                sx={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: '5px', marginRight: '5px' }}
                color="text.secondary"
              >
                {social.icon}
                <Typography color="text.primary">{social.name}</Typography>
              </Link>
            )
          })}
        </Box>
      </Box>
      <Box sx={{ display: 'flex' }} color="text.secondary">
        <LocationOnIcon fontSize="small" />
        <Typography color="text.secondary">{aboutMe.location}</Typography>
      </Box>
    </Section>
  )
}

export default Home
