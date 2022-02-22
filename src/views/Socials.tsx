import React from 'react'
import { Section } from 'components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { socials } from 'data'

const Socials: React.FC = () => {
  return (
    <Section sectionTitle="Get In Touch">
      <Box>
        {socials.map((social, index) => {
          return (
            <Box key={index} sx={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: '5px' }}>
              {social.icon}
              <Typography>{social.name}</Typography>
            </Box>
          )
        })}
      </Box>
    </Section>
  )
}

export default Socials
