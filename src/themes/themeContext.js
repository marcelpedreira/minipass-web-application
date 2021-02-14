import React from 'react';
import defaultTheme from "./default";

const ThemeContext = React.createContext({
  theme: defaultTheme
});

export default ThemeContext;