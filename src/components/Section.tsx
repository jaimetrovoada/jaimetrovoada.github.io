import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import { BoxProps } from '@mui/system'

interface SectionProps extends BoxProps {
  children: React.ReactNode
  sectionTitle: string
}

const Section: React.FC<SectionProps> = ({ sectionTitle, children, ...props }) => {
  return (
    <Box
      sx={{
        height: 'calc(100% / 3)',
        maxHeight: 'calc(100% / 3)',
        width: '50%',
        maxWidth: '50%',
        flex: '0 0 calc(100% / 3)',
      }}
      {...props}
    >
      <Box>
        <Typography color="text.secondary" variant="h4">
          &gt; {sectionTitle}
        </Typography>
      </Box>
      {children}
    </Box>
  )
}

export default Section
