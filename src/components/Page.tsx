import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import { aboutMe } from 'data'
import HeroAppBar from './HeroAppBar'
import { AppbarContext } from 'hooks'

interface Props {
  children: React.ReactNode
}

const Page: React.FC<Props> = ({ children, ...props }) => {
  const currentYear = new Date().getFullYear()

  const { name, resumeLink } = aboutMe

  const [appbarHeight, setAppbarHeight] = React.useState(0)
  const [appbarIsMinimized, setAppbarIsMinimized] = React.useState(false)

  const containerRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    if (appbarIsMinimized) {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.display = 'flex'
        }
      }, 400)
    } else {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.display = 'none'
        }
      }, 400)
    }
  }, [appbarIsMinimized])

  return (
    <Paper
      sx={{
        minHeight: '100vh',
      }}
    >
      <AppbarContext.Provider
        value={{
          appbarHeight: appbarHeight,
          setAppbarHeight: setAppbarHeight,
          isMinimized: appbarIsMinimized,
          setIsMinimized: setAppbarIsMinimized,
        }}
      >
        <HeroAppBar />
        <Container
          maxWidth="lg"
          sx={{
            flexDirection: 'column',
            opacity: appbarIsMinimized ? '100%' : '0',
            height: appbarIsMinimized ? '100%' : '0',
            marginTop: `${appbarHeight}px`,
            transition: 'opacity .5s ease-in-out .5s',
            '>div:not(:last-child)': {
              marginBottom: '10vh',
            },
          }}
          ref={containerRef}
        >
          {children}
          <Box
            component="footer"
            sx={{
              backgroundColor: 'background.paper',
              transition: 'all 1s ease-in-out',
              paddingY: '1rem',
              borderTop: '1px solid',
              borderTopColor: 'background.default',
            }}
          >
            <Container
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}
              maxWidth="xl"
            >
              <Box>
                <Typography>
                  &copy; {currentYear} {name}. All rights reserved.
                </Typography>
                <Link href={resumeLink}>📕 Resume</Link>
              </Box>
            </Container>
          </Box>
        </Container>
      </AppbarContext.Provider>
    </Paper>
  )
}
export default Page
