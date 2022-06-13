import React from 'react'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { aboutMe } from 'data'
import Typography from '@mui/material/Typography'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
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
      onTransitionEnd={() => console.log('transition ended')}
      sx={{
        paddingY: '1rem',
        height: appbarIsMinimized ? '100px' : '100vh',
        backgroundColor: 'background.default',
        transition: 'height .5s ease-in-out',
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
        }}
      >
        <Box
          sx={{
            width: 'fit-content',
            display: 'grid',
            gridTemplateColumns: '50px 1fr',
            gap: '10px',
            fontSize: '50px',
            marginLeft: appbarIsMinimized ? '0' : '50%',
            marginTop: appbarIsMinimized ? '0' : '50vh',
            transform: appbarIsMinimized ? 'translate(0)' : 'translate(-50%, -50%)',
            transition: 'all .5s ease-in-out',
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
        <IconButton
          onClick={handleCloseOverlay}
          sx={{
            margin: 'auto auto 0',
            // width: 'fit-content',
          }}
        >
          <ArrowUpward
            sx={{
              transform: appbarIsMinimized ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform .5s ease-in-out',
            }}
          />
        </IconButton>
      </Container>
    </AppBar>
  )
}

export default HeroAppBar
