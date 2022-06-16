import React from 'react'
import { Section } from 'components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { aboutMe } from 'data'
import Link from '@mui/material/Link'

const Home: React.FC = () => {
  return (
    <Section
      sectionTitle="About Me"
      sx={{
        height: '100vh',
        maxHeight: '100vh',
      }}
    >
      <Box>
        <Typography>{aboutMe.introduction}</Typography>
        <Box sx={{ display: 'flex' }} color="text.secondary">
          <LocationOnIcon fontSize="small" />
          <Typography color="text.secondary">{aboutMe.location}</Typography>
        </Box>
      </Box>
      <Box>
        <Typography>
          {aboutMe.skills.map((skill, index) => {
            return (
              <span key={index}>
                {skill}
                {index !== aboutMe.skills.length - 1 ? ', ' : ''}
              </span>
            )
          })}
        </Typography>
      </Box>
      <Box>
        {aboutMe.socials.map((social, index) => {
          return (
            <Link
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={index}
              sx={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: '5px' }}
              color="text.secondary"
            >
              {social.icon}
              <Typography color="text.primary">{social.name}</Typography>
            </Link>
          )
        })}
      </Box>
    </Section>
  )
}

export default Home
