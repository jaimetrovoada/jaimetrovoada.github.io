import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import { aboutMe } from 'data'

interface Props {
  children: React.ReactNode
}
interface HideOnScrollProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: React.ReactElement
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Page: React.FC<Props> = ({ children, ...props }) => {
  // get current year
  const currentYear = new Date().getFullYear()
  return (
    <Paper sx={{ maxHeight: '100vh', heigh: '100%' }}>
      <HideOnScroll {...props}>
        <AppBar sx={{ background: '#FFFFFF', height: '68px' }} elevation={0} component="header">
          <Container maxWidth="xl">
            <Box sx={{ display: 'grid', gridTemplateColumns: aboutMe.avatar ? '50px 1fr' : '1fr', gap: '10px' }}>
              {aboutMe.avatar ? (
                <Box>
                  <img src={aboutMe.avatar} alt="" />
                </Box>
              ) : null}
              <Box>
                <Typography>{aboutMe.name}</Typography>
                {aboutMe.occupation ? <Typography color="text.secondary">{aboutMe.occupation}</Typography> : null}
              </Box>
            </Box>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexFlow: 'column wrap',
          height: '100%',
          maxHeight: '100%',
          overflow: { xs: 'auto', md: 'hidden' },
        }}
      >
        {children}
      </Container>
      <Container component="footer">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography>
              &copy; {currentYear} {aboutMe.name}. All rights reserved.
            </Typography>
            <Link href={aboutMe.resumeLink}>📕 Resume</Link>
          </Box>
          <Box>
            <Typography>Theme</Typography>
          </Box>
        </Box>
      </Container>
    </Paper>
  )
}
export default Page
