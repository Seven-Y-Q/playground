import React, { Fragment, useEffect, useRef } from "react";

import { eventBus } from '../util';

function Iframe({
  url,
  toggleFullScreen,
  isFullScreen
}) {
  const iframeRef = useRef();

  useEffect(() => {
    eventBus.on('contentChanged', data => {
      iframeRef.current.contentWindow.postMessage(data, '*');
    });
  }, [])

  const handleClick = () => {
    toggleFullScreen();
  }

  return (
    <div className={`iframe ${isFullScreen ? 'full-screen' : ''}`}>
      <div className="title">
        <button className="is-info" onClick={toggleFullScreen}>Toggle Full Screen</button>
      </div>
      <iframe ref={iframeRef} id="preview" src={url} frameBorder="0"></iframe>
    </div>
  );
}

export default Iframe;
