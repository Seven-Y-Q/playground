import React, { Fragment, useEffect, useRef, useContext } from "react";

import { monaco, eventBus } from '../util';
import { ThemeContext } from '../themeContext';

function Editor({
  type,
  display
}) {
  const editRef = useRef();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const editor = monaco.editor.create(editRef.current, {
      language: convertType(type),
      theme
    });

    eventBus.emit('initEditor', {
      [type]: editor
    })

    editor.onDidChangeModelContent(() => {
      eventBus.emit('contentChanged', JSON.stringify({
        type,
        value: editor.getValue()
      }));
    })
  }, [])

  useEffect(() => {
    changeTheme(theme);
  }, [theme])

  function convertType(type) {
    return type === 'js' ? 'javascript' : type;
  }

  function changeTheme(theme) {
    monaco.editor.setTheme(theme);
  }

  return (
    <Fragment>
      <div id={type} className={`editor ${theme} ${display ? '' : 'hidden'}`}>
        <div className="title">{type}</div>
        <div ref={editRef}></div>
      </div>
    </Fragment>
  );
}

export default Editor;
