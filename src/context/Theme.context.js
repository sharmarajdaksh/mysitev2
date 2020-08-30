import React from "react"

const defaultState = {
  darkMode: true,
  toggleDarkMode: () => {},
}

const ThemeContext = React.createContext(defaultState)

export default ThemeContext
