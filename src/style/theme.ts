import { createTheme } from '@mui/material'

export const catppuccin = createTheme({
  palette: {
    background: {
      paper: '#1E1E2E',
      default: '#302D41',
    },
    text: {
      primary: '#cdd6f4',
      secondary: '#bac2de',
    },
    primary: {
      main: '#89dceb',
    },
    secondary: {
      main: '#ABE9B3',
    },
  },
  typography: {
    fontFamily: 'Source Code Pro, monospace',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
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
      },
    },
  },
})
