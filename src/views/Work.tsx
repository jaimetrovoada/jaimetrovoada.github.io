import React from 'react'
import { Section } from 'components'
import Box from '@mui/material/Box'
import { Button, Typography } from '@mui/material'
import { works } from 'data'

const Work = () => {
  if (!works.length) {
    return null
  }

  const [selectedPosition, setSelectedPosition] = React.useState(0)

  const handlePositionClick = (positionIndex: number) => {
    setSelectedPosition(positionIndex)
  }

  return (
    <Section sectionTitle="Experience">
      <Box
        sx={{
          display: 'flex',
          minWidth: '100%',
          width: '100%',
          height: '300px',
          maxHeight: '300px',
          // borderLeft: '1px solid ',
          // borderLeftColor: 'primary',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '0 0 25%',
          }}
        >
          {works.map((work, index) => {
            return (
              <Button
                key={`${index}-${work.position}`}
                onClick={() => handlePositionClick(index)}
                sx={{
                  backgroundColor: index === selectedPosition ? '#313244' : 'currentTheme',
                  color: index === selectedPosition ? 'text.primary' : 'text.secondary',
                  fontWeight: index === selectedPosition ? 'bold' : null,
                }}
              >
                {work.company}
              </Button>
            )
          })}
        </Box>
        <Box
          sx={{
            padding: '0.5rem',
            flex: '0 0 75%',
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
            }}
          >
            {works[selectedPosition].position}{' '}
            <Typography
              component="span"
              sx={{
                color: '#89b4fa',
              }}
            >
              @ {works[selectedPosition].company}
            </Typography>
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: '.9rem',
              marginBottom: '1rem',
            }}
          >
            {works[selectedPosition].period}
          </Typography>
          <Typography color="text.secondary">
            <ul>
              {works[selectedPosition].description.split('\n').map((newLine, index) => {
                return <li key={index}>{newLine}</li>
              })}
            </ul>
          </Typography>
        </Box>
      </Box>
    </Section>
  )
}

export default Work
