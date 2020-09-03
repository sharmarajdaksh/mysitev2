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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ad
        esse, neque illo quas ipsam natus officiis sunt modi assumenda
        exercitationem dicta deleniti doloremque quibusdam eveniet cumque facere
        atque. Labore.
      </p>
    </div>
  )
}

export default Landing
