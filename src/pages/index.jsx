import "../styles/utils/reset.scss"
import "../styles/utils/index.scss"

import React, { useCallback, useState } from "react"

import Aside from "../components/Aside.component"
import Main from "../components/Main.component"
import ThemeContext from "../context/Theme.context"
import indexPageStyles from "../styles/pages/index.module.scss"
import { supportsDarkMode } from "../utils"
import { useEffect } from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = useCallback(
    (d = null) => {
      if (d === null) {
        d = !darkMode
      }

      localStorage.setItem("darkMode", d)
      setDarkMode(d)
    },
    [darkMode, setDarkMode]
  )

  useEffect(() => {
    let d = false

    if (supportsDarkMode()) {
      d = true
    }
    let ld = localStorage.getItem("darkMode")
    if (ld !== null) {
      d = ld === "true" ? true : false
    }

    toggleDarkMode(d)
  }, [toggleDarkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={indexPageStyles.page__shell}>
        <Aside></Aside>
        <Main></Main>
      </div>
    </ThemeContext.Provider>
  )
}
