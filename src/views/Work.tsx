import React from 'react'
import { Section } from 'components'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { works } from 'data'

const Work = () => {
  if (!works.length) {
    return null
  }

  return (
    <Section sectionTitle="Experience">
      <Box
        sx={{
          '> div': {
            border: '1px solid ',
            borderColor: 'primary.main',
            padding: '0.5rem',
            '&:not(:last-child)': {
              marginBottom: '0.75rem',
            },
          },
        }}
      >
        {works.map((work, index) => {
          return (
            <Box key={`${index}-${work.position}`}>
              <Typography>
                <Typography component="span" fontWeight="bold">
                  Position:
                </Typography>{' '}
                {work.position}
              </Typography>
              <Typography>
                <Typography component="span" fontWeight="bold">
                  Company:
                </Typography>{' '}
                {work.company}
              </Typography>
              <Typography>
                {' '}
                <Typography component="span" fontWeight="bold">
                  Period:
                </Typography>{' '}
                {work.period}
              </Typography>
              {work.description ? (
                <Typography>
                  <Typography component="span" fontWeight="bold">
                    Description:
                  </Typography>{' '}
                  {work.description}
                </Typography>
              ) : null}
            </Box>
          )
        })}
      </Box>
    </Section>
  )
}

export default Work
