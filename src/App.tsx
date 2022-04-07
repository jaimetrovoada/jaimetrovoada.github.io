/* eslint-disable require-jsdoc */
import React from 'react'
import { Page } from 'components'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { gruvbox, catppuccin, tokyonight } from 'style/theme'
import { AboutMe, Projects, Socials, Bonus, Skills, Work } from 'views'
import { SelectChangeEvent } from '@mui/material/Select'

function App() {
  const [theme, setTheme] = React.useState('catppuccin')

  const handleThemeChange = (event: SelectChangeEvent) => {
    setTheme(event.target.value as string)
  }

  const getTheme = () => {
    switch (theme) {
      case 'gruvbox':
        return gruvbox
      case 'tokyonight':
        return tokyonight
      default:
        return catppuccin
    }
  }
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Page themeChanger={handleThemeChange} currentTheme={theme}>
        <AboutMe />
        <Skills />
        <Socials />
        <Work />
        <Bonus />
        <Projects />
      </Page>
    </ThemeProvider>
  )
}

export default App
