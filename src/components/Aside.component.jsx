import { FaAt, FaMoon, FaSun } from "react-icons/fa"

import React from "react"
import ThemeContext from "../context/Theme.context"
import asideComponentStyles from "../styles/components/Aside.module.scss"
import classnames from "classnames"
import config from "../config"
import { useContext } from "react"

const Aside = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  const renderSocialIcons = () => {
    return config.socialIconsData.map(socialIconData => (
      <div
        className={classnames(
          asideComponentStyles.awiggleup,
          asideComponentStyles.aside__element,
          darkMode
            ? asideComponentStyles.glowonhover
            : asideComponentStyles.glowonhoverLight
        )}
        key={socialIconData.url}
      >
        <a href={socialIconData.url}>
          <socialIconData.icon />
        </a>
      </div>
    ))
  }

  return (
    <aside
      className={classnames(
        asideComponentStyles.aside__shell,
        !darkMode ? asideComponentStyles.aside__shellLight : ""
      )}
    >
      <div
        className={classnames(
          asideComponentStyles.aside__element,
          asideComponentStyles.aside__email,
          darkMode
            ? asideComponentStyles.glowonhover
            : asideComponentStyles.glowonhoverLight
        )}
        key={"emailtext"}
      >
        <a href={`mailto:${config.email}`}>{config.email}</a>
      </div>
      <div
        className={classnames(
          asideComponentStyles.aside__element,
          asideComponentStyles.aside__emailMobile,
          darkMode
            ? asideComponentStyles.glowonhover
            : asideComponentStyles.glowonhoverLight
        )}
        key={"emailicon"}
      >
        <a href={`mailto:${config.email}`}>
          <FaAt />
        </a>
      </div>
      {renderSocialIcons()}
      <div
        className={classnames(
          asideComponentStyles.awiggleup,
          asideComponentStyles.aside__element,
          darkMode
            ? asideComponentStyles.glowonhover
            : asideComponentStyles.glowonhoverLight
        )}
      >
        <button onClick={e => toggleDarkMode()}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <div className={asideComponentStyles.aside__verticalline}></div>
    </aside>
  )
}

export default Aside
