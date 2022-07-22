import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import { BoxProps } from '@mui/system'

interface SectionProps extends BoxProps {
  children: React.ReactNode
  sectionTitle: string
  fixedHeader?: boolean
  titleSize?: number | string
}

const Section: React.FC<SectionProps> = ({ sectionTitle, children, fixedHeader, titleSize, ...props }) => {
  return (
    <Box
      sx={{
        padding: '50px 0',
        // height: '100vh',
        // maxHeight: '100vh',
        // width: { xs: '100%', md: '50%' },
        // maxWidth: { xs: '100%', md: '50%' },
        // flex: '0 0 100vh',
      }}
      {...props}
    >
      <Typography color="primary.main" variant="h4" fontSize={titleSize} marginBottom="1.5rem">
        &gt; {sectionTitle}
      </Typography>
      {children}
    </Box>
  )
}

export default Section
