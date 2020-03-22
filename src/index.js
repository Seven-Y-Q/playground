import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import Editor from './components/Editor';
import Iframe from './components/Iframe';
import Header from './components/Header';
import { ThemeContext, themes } from './themeContext';

function App() {
  const [theme, setTheme] = useState(themes.light);
  const [display, setDisplay] = useState(true);

  function changeTheme(value) {
    setTheme(value);
  }

  function toggleFullScreen() {
    setDisplay(!display);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Header changeTheme={changeTheme} display={display} />
      <div id="container">
        <Editor type="js" display={display} />
        <Editor type="css" display={display} />
        <Editor type="html" display={display} />
        <Iframe url="https://seven-y-q.github.io/playground/dist/test.html" isFullScreen={!display} toggleFullScreen={toggleFullScreen} />
      </div>
    </ThemeContext.Provider>
  );
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
