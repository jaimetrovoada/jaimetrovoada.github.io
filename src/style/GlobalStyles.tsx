import { createGlobalStyle } from 'styled-components'
import { ColorschemeProps } from './theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends ColorschemeProps { }
}
const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}
body {
  height: 100vh;
  background: ${({ theme }) => theme.background.even};
}
`


export default GlobalStyle
