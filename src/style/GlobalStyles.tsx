import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");
@import "./variables", "./reset", "./portfolio", "./contact", "./animations";

html {
  scroll-behavior: smooth;
}
body {
  height: 100vh;
}
`


export default GlobalStyle
