import React from "react"
import currentlyReadingStyles from "../styles/components/CurrentlyReading.module.scss"

const CurrentlyReadingBook = ({ book }) => {
  console.log(book)
  return (
    <div className={currentlyReadingStyles.singlebook__shell}>
      <div>
        <img src={book.image_url._text} alt={book.title._text} />
      </div>
      <div className={currentlyReadingStyles.singlebook_detailsdiv}>
        <h3>{book.title._text}</h3>
        <p>
          By{" "}
          <span className={currentlyReadingStyles.singlebook__authorname}>
            {book.authors.author.length
              ? book.authors.author[0].name._text
              : book.authors.author.name._text}
          </span>
        </p>
        <hr />
        <p>
          <a href={book.link._text}>View on Goodreads</a>
        </p>
      </div>
    </div>
  )
}

const CurrentlyReading = ({ booksData }) => {
  if (!booksData) {
    return (
      <p>
        Could not load book data via the GoodReads API. Please try again later.
      </p>
    )
  }

  const renderCurrentlyReadingBooks = () => {
    let books = booksData
    if (!booksData.length) {
      books = [booksData]
    }

    return books.map(book => (
      <CurrentlyReadingBook book={book} key={book.id._text} />
    ))
  }

  return (
    <div className={currentlyReadingStyles.currentlyreading__shell}>
      <h2>I'm currently reading...</h2>
      <hr />
      <div>{renderCurrentlyReadingBooks()}</div>
    </div>
  )
}

export default CurrentlyReading
