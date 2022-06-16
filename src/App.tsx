/* eslint-disable require-jsdoc */
import React from 'react'
import { Page } from 'components'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { catppuccin } from 'style/theme'
import { AboutMe, Projects, Work } from 'views'

function App() {
  return (
    <ThemeProvider theme={catppuccin}>
      <CssBaseline />
      <Page>
        <AboutMe />
        <Work />
        <Projects />
      </Page>
    </ThemeProvider>
  )
}

export default App
