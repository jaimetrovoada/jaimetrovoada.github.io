import React from 'react'
import { Section } from 'components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { aboutMe } from 'data'

const Bonus: React.FC = () => {
  if (!aboutMe.funFact) return null
  return (
    <Section sectionTitle={`(Bonus) ${aboutMe?.funFact?.title}`}>
      <Box>
        <Typography>{aboutMe?.funFact?.description}</Typography>
      </Box>
    </Section>
  )
}

export default Bonus
