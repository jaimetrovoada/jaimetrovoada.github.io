import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { aboutMe } from 'data'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import IconButton from '@mui/material/IconButton'

interface Props {
  children: React.ReactNode
  themeChanger: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  currentTheme: 'dark' | 'light'
}

const Page: React.FC<Props> = ({ children, themeChanger, currentTheme, ...props }) => {
  const currentYear = new Date().getFullYear()

  const { name, occupation, avatar } = aboutMe

  const appbarRef = React.useRef<HTMLDivElement>(null)
  const [appbarHeight, setAppbarHeight] = React.useState(0)
  React.useEffect(() => {
    if (appbarRef.current) {
      setAppbarHeight(appbarRef.current.clientHeight)
    }
  }, [appbarRef])

  return (
    <Paper
      sx={{
        minHeight: '100vh',
        heigh: '100%',
        '*': {
          transition: 'all .5s ease-in-out',
        },
      }}
    >
      <AppBar
        sx={{
          flex: '0 0 auto',
          justifyContent: 'center',
          '@supports (backdrop-filter: blur())': {
            backgroundColor: currentTheme === 'dark' ? '#1d2021bf' : '#fbf1c7bf',
            backdropFilter: 'blur(10px)',
          },
          '@supports not (backdrop-filter: blur())': {
            backgroundColor: 'background.default',
          },
        }}
        elevation={0}
        component="header"
        ref={appbarRef}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '50px 1fr',
              gap: '10px',
              fontSize: '50px',
              alignItems: 'center',
            }}
          >
            {avatar ? (
              <Box>
                <img src={avatar} alt={`${name}-avatar`} style={{ width: '100%', maxWidth: '100%' }} />
              </Box>
            ) : (
              <AccountCircleIcon fontSize="inherit" />
            )}
            <Box>
              <Typography component="h1" color="text.primary" fontWeight="bold">
                {name}
              </Typography>
              {occupation ? (
                <Typography color="text.secondary" component="h2">
                  {occupation}
                </Typography>
              ) : null}
            </Box>
          </Box>
          <Box>
            {currentTheme === 'light' ? (
              <IconButton color="primary" aria-label="dark mode toggle" onClick={themeChanger}>
                <DarkModeIcon />
              </IconButton>
            ) : (
              <IconButton color="primary" aria-label="light mode toggle" onClick={themeChanger}>
                <LightModeIcon />
              </IconButton>
            )}
          </Box>
        </Container>
      </AppBar>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          minHeight: '100%',
          height: '100%',
          flexDirection: 'column',
          flex: '1 1 auto',
          paddingTop: `calc(${appbarHeight}px + 1rem)`,
        }}
      >
        {children}
      </Container>
      <Box
        component="footer"
        sx={{
          backgroundColor: 'background.paper',
          flex: '0 0 auto',
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
          </Box>
        </Container>
      </Box>
    </Paper>
  )
}
export default Page
