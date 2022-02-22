import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'

interface SectionProps {
  children: React.ReactNode
  sectionTitle: string
}

const Section: React.FC<SectionProps> = ({ sectionTitle, children, ...props }) => {
  return (
    <Box sx={{ height: 'calc(100% / 3)', maxHeight: 'calc(100% / 3)', width: '50%', maxWidth: '50%' }}>
      <Box>
        <Typography color="text.secondary" fontSize={3}>
          &gt; {sectionTitle}
        </Typography>
      </Box>
      {children}
    </Box>
  )
}

export default Section
