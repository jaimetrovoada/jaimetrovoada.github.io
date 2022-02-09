import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { gruvbox, catppuccin, tokyonight } from 'style/theme'

const ThemeProviderWrapper = (props:any) => <ThemeProvider theme={props.theme} {...props} />

interface ThemeProviderProps {
  theme: any
}

const Provider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const getTheme = () => {
    switch (theme) {
      case 'gruvbox':
        return gruvbox
      case 'catppuccin':
        return catppuccin
      case 'tokyonight':
        return tokyonight
      default:
        return gruvbox
    }
  }
  return (
    <ThemeProviderWrapper theme={getTheme()}>{children}</ThemeProviderWrapper>
  )
}

export default Provider
