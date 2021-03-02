import React, {useState} from 'react'

const BookForm = (props) => {
  const {addBook} = props 
  const [title, setTitle]= useState('')
  const [author, setAuthor]= useState('')
  const [genre, setGenre]= useState('')
  const handleSubmit = (t)=>{
    console.log(t)
    t.preventDefault()
    console.log(title)
    console.log(author)
    console.log(genre)

    addBook({title: title, author: author, genre: genre})
    setTitle('')
    setAuthor('')
    setGenre('')
  }
  return (
    <div>
        <h1>Book Form here</h1>
        <form onSubmit={handleSubmit}>
            <p>Title</p>
            <input
              value={title}
              onChange={(t)=>{setTitle(t.target.value)}}
            />
            <p>Author</p>
            <input
              value={author}
              onChange={(t)=>{setAuthor(t.target.value)}}
            />
            <p>Genre</p>
            <input
              value={genre}
              onChange={(t)=>{setGenre(t.target.value)}}
            />
            <button type='submit'>add</button>
        </form>
    </div>
)
}

export default BookForm