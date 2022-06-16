import React from 'react'
import { Section, ExperienceDrawer } from 'components'
import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
import { works } from 'data'

const Work = () => {
  if (!works.length) {
    return null
  }

  return (
    <Section sectionTitle="Where I've Worked">
      <Box
      /*  sx={{
          '> div': {
            border: '1px solid ',
            borderColor: 'primary.main',
            padding: '0.5rem',
            '&:not(:last-child)': {
              marginBottom: '0.75rem',
            },
          },
        }} */
      >
        <ExperienceDrawer />
      </Box>
    </Section>
  )
}

export default Work
