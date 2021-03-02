import React from 'react' 

const Book = (props) => {
  const {isbn, title, author, genre, deleteBook} = props
  return (
    <div style={{border:'14px solid black', margin:'20px'}}>
      <h1>Books Listed</h1>
      <p>isbn: {isbn}</p>
      <p>title: {title}</p>
      <p>author: {author}</p>
      <p>genre: {genre}</p>
    </div>
  )
}

export default Book