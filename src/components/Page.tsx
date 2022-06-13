import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { aboutMe } from 'data'
import HeroAppBar from './HeroAppBar'
import { AppbarContext } from 'hooks'

interface Props {
  children: React.ReactNode
  themeChanger: (event: SelectChangeEvent<string>, child: React.ReactNode) => void
  currentTheme: string
}
interface HideOnScrollProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: React.ReactElement
}

// eslint-disable-next-line require-jsdoc, no-unused-vars
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

const Page: React.FC<Props> = ({ children, themeChanger, currentTheme }) => {
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
        maxHeight: { md: '100vh' },
        minHeight: '100vh',
        heigh: '100%',
        display: 'flex',
        flexDirection: 'column',
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
          maxWidth="xl"
          sx={{
            display: 'flex',
            opacity: appbarIsMinimized ? '100%' : '0',
            flexFlow: 'column wrap',
            height: appbarIsMinimized ? '100%' : '0',
            overflow: { md: 'hidden' },
            flex: appbarIsMinimized ? '1 1 auto' : '0',
            marginTop: `calc(${appbarHeight}px + 1rem)`,
            transition: 'opacity .5s ease-in-out .5s',
          }}
          ref={containerRef}
        >
          {children}
        </Container>
        <Box
          component="footer"
          sx={{
            backgroundColor: 'background.paper',
            flex: '0 0 auto',
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
            <Box>
              <FormControl fullWidth>
                <InputLabel id="theme-changer">Theme</InputLabel>
                <Select
                  labelId="theme-changer"
                  id="theme-select"
                  value={currentTheme}
                  label="Change themes"
                  onChange={themeChanger}
                >
                  <MenuItem value={'gruvbox'}>Gruvbox</MenuItem>
                  <MenuItem value={'catppuccin'}>Catppuccin</MenuItem>
                  <MenuItem value={'tokyonight'}>Tokyo Night</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Container>
        </Box>
      </AppbarContext.Provider>
    </Paper>
  )
}
export default Page
