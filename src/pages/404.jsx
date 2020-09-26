import React, { useContext, useEffect } from "react"
import classnames from "classnames"
import { navigate } from "gatsby"

import ThemeContext from "../context/Theme.context"
import config from "../config"

import mainComponentStyles from "../styles/components/Main.module.scss"
import page404Styles from "../styles/pages/404.module.scss"

const Page404 = () => {
  const { darkMode } = useContext(ThemeContext)

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 3000)
  })

  return (
    <main
      className={classnames(
        mainComponentStyles.main__shell,
        darkMode ? "" : mainComponentStyles.main__shellLight
      )}
    >
      <section className={mainComponentStyles.main__section}>
        <div className={page404Styles.main404}>{config[404].message}</div>
      </section>
    </main>
  )
}

export default Page404
