import { createTheme } from '@mui/material'
const styleOverrides = {
  '*::-webkit-scrollbar': {
    width: '0.2em',
  },
  '*::-webkit-scrollbar-track': {
    '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: '#F8BD96',
    borderRadius: '16px',
  },
}

export const dark = createTheme({
  palette: {
    background: {
      paper: '#282828',
      default: '#1d2021',
    },
    text: {
      primary: '#ebdbb2',
      secondary: '#83a598',
    },
    primary: {
      main: '#cc241d',
    },
    secondary: {
      main: '#fabd2f',
    },
  },
  typography: {
    fontFamily: 'Consolas, Lucida Console, ui-monospace, monospace',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: styleOverrides,
    },
  },
})

export const light = createTheme({
  palette: {
    background: {
      paper: '#f9f5d7',
      default: '#fbf1c7',
    },
    text: {
      primary: '#3c3836',
      secondary: '#458588',
    },
    primary: {
      main: '#fd0006',
    },
    secondary: {
      main: '#b57614',
    },
  },
  typography: {
    fontFamily: 'Consolas, Lucida Console, ui-monospace, monospace',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: styleOverrides,
    },
  },
})
