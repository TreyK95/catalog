import React from 'react'
import Book from './Book'

const Books = (props)=> {
  const {books, deleteBook } = props
  const renderBooks = () => {
    if (books.length === 0){
      return (<p>No books</p>)
    } 

    return books.map( book=> {
        return <Book deleteBook={deleteBook} key={book.isbn} {...book} />
    })
  }
  return(
    <div>
      <h1>Books Listed:</h1>
      {renderBooks()}
    </div>
  )
}

export default Books