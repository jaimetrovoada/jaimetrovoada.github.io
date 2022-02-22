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
  // get current year
  const currentYear = new Date().getFullYear()
  return (
    <Paper sx={{ maxHeight: '100vh', heigh: '100%' }}>
      <HideOnScroll {...props}>
        <AppBar sx={{ background: 'background.paper', height: '68px' }} elevation={0} component="header">
          <Container
            maxWidth="xl"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'grid', gridTemplateColumns: '50px 1fr', gap: '10px' }}>
              {aboutMe.avatar ? (
                <Box>
                  <img src={aboutMe.avatar} alt={`${aboutMe.name}-avatar`} />
                </Box>
              ) : (
                <AccountCircleIcon />
              )}
              <Box>
                <Typography>{aboutMe.name}</Typography>
                {aboutMe.occupation ? <Typography color="text.secondary">{aboutMe.occupation}</Typography> : null}
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
          maxHeight: '100%',
          overflow: { xs: 'auto', md: 'hidden' },
        }}
      >
        {children}
      </Container>
      <Container
        component="footer"
        sx={{
          background: 'background.paper',
        }}
      >
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
