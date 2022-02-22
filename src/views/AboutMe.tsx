import React from 'react'
import { Section } from 'components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { aboutMe } from 'data'

const Home: React.FC = () => {
  return (
    <Section sectionTitle="About Me">
      <Box>
        <Typography>{aboutMe.introduction}</Typography>
        <Box sx={{ display: 'flex' }} color="text.secondary">
          <LocationOnIcon fontSize="small" />
          <Typography color="text.secondary">{aboutMe.location}</Typography>
        </Box>
      </Box>
    </Section>
  )
}

export default Home
