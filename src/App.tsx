/* eslint-disable require-jsdoc */
import React from 'react'
import { Page } from 'components'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { dark, light } from 'style/theme'
import { AboutMe, Projects, Work } from 'views'
import { useLocalStorage } from 'hooks'

function App() {
  // const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? catppuccin : gruvboxLight
  // const [theme, setTheme] = React.useState<'dark' | 'light'>(
  //   window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  // )
  const [theme, setTheme] = useLocalStorage<'dark' | 'light'>(
    'theme',
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  )

  const handleThemeChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const getTheme = () => {
    switch (theme) {
      case 'light':
        return light
      default:
        return dark
    }
  }
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Page themeChanger={handleThemeChange} currentTheme={theme}>
        <AboutMe />
        <Work />
        <Projects />
      </Page>
    </ThemeProvider>
  )
}

export default App
