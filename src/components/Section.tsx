import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import { BoxProps } from '@mui/system'

interface SectionProps extends BoxProps {
  children: React.ReactNode
  sectionTitle: string
  fixedHeader?: boolean
}

const Section: React.FC<SectionProps> = ({ sectionTitle, children, fixedHeader, ...props }) => {
  return (
    <Box
      sx={{
        height: 'calc(100% / 3)',
        maxHeight: 'calc(100% / 3)',
        width: { xs: '100%', md: '50%' },
        maxWidth: { xs: '100%', md: '50%' },
        flex: '0 0 calc(100% / 3)',
      }}
      {...props}
    >
      <Box
        sx={{
          position: fixedHeader ? 'fixed' : null,
          backgroundColor: fixedHeader ? 'background.paper' : null,
        }}
      >
        <Typography color="primary.main" variant="h4">
          &gt; {sectionTitle}
        </Typography>
      </Box>
      {children}
    </Box>
  )
}

export default Section
