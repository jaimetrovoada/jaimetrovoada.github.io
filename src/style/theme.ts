import { createTheme } from '@mui/material'

export const gruvbox = createTheme({
  palette: {
    background: {
      paper: '#282828',
    },
    text: {
      primary: '#ebdbb2',
      secondary: '#d5c4a1',
    },
    primary: {
      main: '#ebdbb2',
    },
    secondary: {
      main: "#fbf1c7",
    },
  },
  typography: {
    fontFamily: 'Source Code Pro, monospace',
  },
})

export const catppuccin = createTheme({
  palette: {
    background: {
      paper: '#F2F6FE',
    },
    text: {
      primary: '#0E1D38',
      secondary: '#2772FA',
    },
    primary: {
      main: '#2772FA',
    },
  },
  typography: {
    fontFamily: 'Source Code Pro, monospace',
  },
})

export const tokyonight = createTheme({
  palette: {
    background: {
      paper: '#F2F6FE',
    },
    text: {
      primary: '#0E1D38',
      secondary: '#2772FA',
    },
    primary: {
      main: '#2772FA',
    },
  },
  typography: {
    fontFamily: 'Source Code Pro, monospace',
  },
})


