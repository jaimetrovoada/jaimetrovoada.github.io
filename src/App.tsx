import React from 'react';
import logo from './logo.svg';
import GlobalStyle from 'style/GlobalStyles'
import { Page } from 'components';
import Provider from 'provider/ThemeProvider';
// import './App.css';

function App() {
  const [theme, setTheme] = React.useState('gruvbox');
  
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  }

  return (
    <Provider theme={theme}>
    <Page >
      <GlobalStyle />
      <header className="App-header">
        <select name="theme-select" id="theme" onChange={handleThemeChange}>
          <option value="gruvbox" selected>Gruvbox</option>
          <option value="tokyonight">Tokyo Night</option>
          <option value="catpuccin">Catpuccin</option>
      </select>
      </header>
    </Page>
    </Provider>
  );
}

export default App;
