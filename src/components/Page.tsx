import React from 'react'
import AppBar from '@mui/material/AppBar'
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { aboutMe } from 'data'

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

const Page: React.FC<Props> = ({ children, themeChanger, currentTheme, ...props }) => {
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
    <Paper
      sx={{ maxHeight: { md: '100vh' }, minHeight: '100vh', heigh: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            paddingY: '1rem',
            flex: '0 0 auto',
            justifyContent: 'center',
            backgroundColor: 'background.default',
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
                  <img src={avatar} alt={`${name}-avatar`} />
                </Box>
              ) : (
                <AccountCircleIcon fontSize="inherit" />
              )}
              <Box>
                <Typography component="h1">{name}</Typography>
                {occupation ? (
                  <Typography color="secondary.contrastText" component="h2">
                    {occupation}
                  </Typography>
                ) : null}
              </Box>
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
        </AppBar>
      </HideOnScroll>
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexFlow: 'column wrap',
          minHeight: '100%',
          height: '100%',
          overflow: { md: 'hidden' },
          flex: '1 1 auto',
          paddingTop: `calc(${appbarHeight}px + 1rem)`,
          '>div:not(:last-child)': {
            marginBottom: '20px',
          },
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
          <Typography>
            &copy; {currentYear} {name}. All rights reserved.
          </Typography>
          <Link href={resumeLink}>📕 Resume</Link>
        </Container>
      </Box>
    </Paper>
  )
}
export default Page
