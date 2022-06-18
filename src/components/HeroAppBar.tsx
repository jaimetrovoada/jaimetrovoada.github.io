import React from 'react'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { aboutMe } from 'data'
import Typography from '@mui/material/Typography'
import { ArrowUpward } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useAppbarContext, useComponentSize } from 'hooks'

const HeroAppBar = () => {
  const appbarRef = React.useRef<HTMLDivElement>(null)
  const { setAppbarHeight, isMinimized: appbarIsMinimized, setIsMinimized: setAppbarIsMinimized } = useAppbarContext()

  const { height } = useComponentSize(appbarRef)
  React.useEffect(() => {
    if (appbarRef.current) {
      setAppbarHeight(height)
    }
  }, [height])

  const handleCloseOverlay = () => {
    setAppbarIsMinimized((state: boolean) => !state)
  }
  const { name, occupation, avatar } = aboutMe

  return (
    <AppBar
      sx={{
        height: appbarIsMinimized ? '5rem' : '100vh',
        backgroundColor: 'background.default',
        transition: 'height 1s ease-in-out',
      }}
      elevation={0}
      component="header"
      ref={appbarRef}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'height 1s ease-in-out',
        }}
      >
        <Box
          sx={{
            flex: appbarIsMinimized ? '0' : 'auto',
            transition: 'flex 1s ease-in',
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              maxWidth: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 1s ease-in-out',
            }}
          >
            <Box
              sx={{
                flex: `0 0 ${appbarIsMinimized ? '2.5rem' : '50%'}`,
                marginRight: appbarIsMinimized ? 'unset' : '-25%',
                transition: 'flex 1s ease-in-out, margin-right 1s ease-in-out',
              }}
            >
              <img
                src={avatar}
                alt={`${name}-avatar`}
                style={{ width: '100%', maxWidth: '100%', transition: 'width 1s ease-in-out' }}
              />
            </Box>
            <Box>
              <Typography
                color="text.secondary"
                sx={{
                  height: appbarIsMinimized ? '0' : null,
                  visibility: appbarIsMinimized ? 'hidden' : 'visible',
                  opacity: appbarIsMinimized ? '0' : '1',
                  transition: 'all 1s ease-in-out',
                }}
              >
                Hello, I am
              </Typography>
              <Typography
                component="h1"
                color={appbarIsMinimized ? 'text.primary' : '#fab387'}
                fontWeight="bold"
                fontSize={appbarIsMinimized ? '1rem' : '3rem'}
                sx={{
                  transition: 'all 1s ease-in-out',
                }}
              >
                {name}
              </Typography>
              {occupation ? (
                <Typography
                  color="text.secondary"
                  component="h2"
                  sx={{ fontSize: { md: appbarIsMinimized ? '1rem' : '1.75rem' }, transition: 'all 1s ease-in-out' }}
                >
                  {appbarIsMinimized ? occupation : 'I build web apps with a focus on simplicity and usability.'}
                </Typography>
              ) : null}
            </Box>
          </Box>
          <Box
            sx={{
              flex: appbarIsMinimized ? 'auto' : '0',
              transition: 'all 1s ease-in-out',
            }}
          />
        </Box>

        <Box
          sx={{
            flex: appbarIsMinimized ? '0' : 'auto',
            transition: 'flex 1s ease-in',
          }}
        />
      </Container>
      <Box
        sx={{
          margin: '0 auto',
        }}
      >
        <IconButton onClick={handleCloseOverlay}>
          <ArrowUpward
            color="primary"
            sx={{
              transform: appbarIsMinimized ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 1s ease-in-out',
            }}
          />
        </IconButton>
      </Box>
    </AppBar>
  )
}

export default HeroAppBar
