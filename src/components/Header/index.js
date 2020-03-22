import React, { Fragment, useState } from "react";

import { eventBus } from '../../util';
import { themes } from '../../themeContext';
import * as example from '../../examples';

function Header({
  changeTheme,
  display
}) {
  if (!display) return null;

  const [theme, setTheme] = useState(themes.light);
  const [editorObj, setEditorObj] = useState({});

  const handleClick = (theme) => (e) => {
    changeTheme(theme);
    setTheme(theme);
  }

  eventBus.on('initEditor', data => {
    setEditorObj(editorObj => ({...editorObj, ...data}));
  })

  const showExample = () => {
    Object.keys(example).forEach(key => editorObj[key].setValue(example[key]));
  }

  return (
    <div id="header" className={theme}>
      <div className="setting">
        <img src="https://cdn.svgporn.com/logos/poeditor.svg" />
        <span>Change Theme</span>
        <button className="is-dark" onClick={handleClick('vs-dark')}>Dark</button>
        <button className="is-light" onClick={handleClick('vs')}>White</button>
      </div>
      <button className="more" onClick={showExample}>Example: Implement base64 with vanilla JS</button>
      <a target="__blank" href="https://space.bilibili.com/48366172" className="is-link">More Videos</a>
    </div>
  );
}

export default React.memo(Header);
