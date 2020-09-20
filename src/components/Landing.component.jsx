import React from "react"
import config from "../config"
import landingComponentStyles from "../styles/components/Landing.module.scss"

const Landing = () => {
  return (
    <div className={landingComponentStyles.landing}>
      <p className={landingComponentStyles.preText}>{config.landing.preText}</p>
      <h1 className={landingComponentStyles.name}>{config.landing.name}</h1>
      <p className={landingComponentStyles.postText}>
        {config.landing.postText}
      </p>

      <p className={landingComponentStyles.longText}>
        {config.landing.mainPara}
      </p>
    </div>
  )
}

export default Landing
