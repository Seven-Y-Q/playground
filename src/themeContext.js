import React from "react";

export const themes = {
  light: 'vs',
  dark: 'vs-dard'
};

export const ThemeContext = React.createContext(
  themes.light // default value
);
