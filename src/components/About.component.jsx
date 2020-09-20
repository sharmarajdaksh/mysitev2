import React, { useEffect, useState } from "react"

import CurrentlyReading from "./CurrentlyReading.component"
import ThemeContext from "../context/Theme.context"
import axios from "axios"
import classnames from "classnames"
import config from "../config"
import convert from "xml-js"
import mainComponentStyles from "../styles/components/Main.module.scss"
import { useContext } from "react"

const About = () => {
  const [loadingBooksData, setLoadingBooksData] = useState(true)
  const [booksData, setBooksData] = useState(null)

  const { darkMode } = useContext(ThemeContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentlyReadingResponse = await axios.get(
          config.goodreadsCurrentlyReadingEndpoint,
          {
            headers: {
              "Allow-Origin": "*",
            },
          }
        )
        const currentlyReadingData = convert.xml2js(
          currentlyReadingResponse.data,
          {
            compact: true,
          }
        )
        setBooksData(currentlyReadingData.GoodreadsResponse.books.book)
        setLoadingBooksData(false)
      } catch {
        setLoadingBooksData(true)
      }
    }
    fetchData()
  }, [])

  return (
    <main
      className={classnames(
        mainComponentStyles.main__shell,
        darkMode ? "" : mainComponentStyles.main__shellLight
      )}
    >
      {booksData && (
        <section className={mainComponentStyles.main__section}>
          <CurrentlyReading booksData={booksData} />
        </section>
      )}
      <section className={mainComponentStyles.main__section}>
        <div>Hello</div>
      </section>
    </main>
  )
}

export default About
