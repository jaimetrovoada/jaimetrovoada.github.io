import React from 'react'
import { Page } from 'components'
import { ThemeProvider } from '@mui/material'
import { gruvbox, catppuccin, tokyonight } from 'style/theme'
import { AboutMe, Projects, Socials, Bonus, Skills } from 'views'

function App() {
  const [theme, setTheme] = React.useState('gruvbox')

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value)
  }

  const getTheme = () => {
    switch (theme) {
      case 'catppuccin':
        return catppuccin
      case 'tokyonight':
        return tokyonight
      default:
        return gruvbox
    }
  }
  return (
    <ThemeProvider theme={getTheme()}>
      <Page>
        <header className="App-header">
          <select name="theme-select" id="theme" onChange={handleThemeChange}>
            <option value="gruvbox" selected>
              Gruvbox
            </option>
            <option value="tokyonight">Tokyo Night</option>
            <option value="catpuccin">Catpuccin</option>
          </select>
        </header>
        <AboutMe />
        <Skills />
        <Socials />
        <Bonus />
        <Projects />
      </Page>
    </ThemeProvider>
  )
}

export default App
