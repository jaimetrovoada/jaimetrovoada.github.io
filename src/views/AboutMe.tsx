import React from 'react'
import { Section } from 'components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { aboutMe } from 'data'

const Home: React.FC = () => {
  return (
    <Section sectionTitle="About Me">
      <Box>
        <Typography>{aboutMe.introduction}</Typography>
        <Typography>
          <i className="fa-solid fa-location-dot" />
          {aboutMe.location}
        </Typography>
      </Box>
    </Section>
  )
}

export default Home
