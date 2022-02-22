import React from 'react'
import { Section } from 'components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { aboutMe } from 'data'

const Skills: React.FC = () => {
  return (
    <Section sectionTitle="Skills">
      <Box>
        <Typography>
          {
            aboutMe.skills.map((skill, index) => {
              return (
                <span key={index}>
                  {skill}
                  {index !== aboutMe.skills.length - 1 ? ', ' : ''}
                </span>
              )
            })
          }
        </Typography>
      </Box>
    </Section>
  )
}

export default Skills
