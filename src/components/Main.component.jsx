import React, { useEffect } from "react"

import Landing from "./Landing.component"
import ThemeContext from "../context/Theme.context"
import classnames from "classnames"
import mainComponentStyles from "../styles/components/Main.module.scss"
import { useContext } from "react"

const Main = () => {
  const { darkMode } = useContext(ThemeContext)

  const handleScroll = () => {}

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main
      className={classnames(
        mainComponentStyles.main__shell,
        darkMode ? "" : mainComponentStyles.main__shellLight
      )}
    >
      <section className={mainComponentStyles.main__section}>
        <Landing />
      </section>
      <section className={mainComponentStyles.main__section}>
        dakshraj sharma
      </section>
    </main>
  )
}

export default Main
