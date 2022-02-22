import React from 'react'
import { Section } from 'components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { socials } from 'data'

const Socials: React.FC = () => {
  return (
    <Section sectionTitle="Get In Touch">
      <Box>
        {socials.map((social, index) => {
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

export default Socials
