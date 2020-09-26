import React, { useContext } from "react"
import classnames from "classnames"

import ThemeContext from "../context/Theme.context"

import navbarComponentStyles from "../styles/components/Navbar.module.scss"

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <nav
      className={classnames(
        navbarComponentStyles.navbar__shell,
        !darkMode ? navbarComponentStyles.navbar__shellLight : ""
      )}
    >
      <ul>
        <li
          className={classnames(
            darkMode
              ? navbarComponentStyles.glowonhover
              : navbarComponentStyles.glowonhoverLight
          )}
        >
          Home
        </li>
        <li
          className={classnames(
            darkMode
              ? navbarComponentStyles.glowonhover
              : navbarComponentStyles.glowonhoverLight
          )}
        >
          Experience
        </li>
        <li
          className={classnames(
            darkMode
              ? navbarComponentStyles.glowonhover
              : navbarComponentStyles.glowonhoverLight
          )}
        >
          Me
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
