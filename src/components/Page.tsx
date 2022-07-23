import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { aboutMe } from 'data'

interface Props {
  children: React.ReactNode
}

const Page: React.FC<Props> = ({ children, ...props }) => {
  const currentYear = new Date().getFullYear()

  const { name, occupation, resumeLink, avatar } = aboutMe

  const appbarRef = React.useRef<HTMLDivElement>(null)
  const [appbarHeight, setAppbarHeight] = React.useState(0)
  React.useEffect(() => {
    if (appbarRef.current) {
      setAppbarHeight(appbarRef.current.clientHeight)
    }
  }, [appbarRef])

  return (
    <Paper sx={{ minHeight: '100vh', heigh: '100%' }}>
      <AppBar
        sx={{
          flex: '0 0 auto',
          justifyContent: 'center',
          '@supports (backdrop-filter: blur())': {
            backgroundColor: '#302D41BF',
            backdropFilter: 'blur(10px)',
          },
          '@supports not (backdrop-filter: blur())': {
            backgroundColor: '#302D41',
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
            <Link href={resumeLink} target="_blank" rel="noopener">
              📕 Resume
            </Link>
          </Box>
        </Container>
      </Box>
    </Paper>
  )
}
export default Page
