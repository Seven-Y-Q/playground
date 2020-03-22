import React, { Fragment, useState } from "react";

import { eventBus } from '../../util';
import { themes } from '../../themeContext';
import * as exampleObj from '../../examples';

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

  const showExample = (filename) => () => {
    Object.keys(exampleObj[filename]).forEach(key => {
      if (
        (key === 'js' || key === 'html') ||
        filename === 'base64'
      ) {
        editorObj[key].setValue(exampleObj[filename][key]);
        return;
      }

      type(exampleObj[filename][key], 0, count => {
        editorObj[key].setValue(exampleObj[filename][key].slice(0, count));

        if ((editorObj[key].getScrollHeight() - editorObj[key].getScrollTop() - 325) > 18 * 10) {
          editorObj[key].setScrollPosition({scrollTop: editorObj[key].getScrollTop() + 18})
        }
      });
    });
  }

  function type(str, count, cb) {
    if (count > str.length) return;
    cb(count);
    setTimeout(function() {
      type(str, ++count, cb);
    }, 40);
  }

  return (
    <div id="header" className={theme}>
      <div className="setting">
        <img src="https://cdn.svgporn.com/logos/poeditor.svg" />
        <span>Change Theme</span>
        <button className="is-dark" onClick={handleClick('vs-dark')}>Dark</button>
        <button className="is-light" onClick={handleClick('vs')}>White</button>
      </div>
      <div className="right">
        <button className="more" onClick={showExample('base64')}>Example: base64</button>
        <button className="more" onClick={showExample('moon')}>Example: moon</button>
        <a target="__blank" href="https://space.bilibili.com/48366172" className="is-link">More Videos</a>
      </div>
    </div>
  );
}

export default React.memo(Header);
