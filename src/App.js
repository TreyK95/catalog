import './App.css';
import React, {useState, useEffect} from 'react';
import Book from './Books';
import axios from 'axios';
import BookForm from './BookForm';

function App() {

  const [books, setBooks]= useState([0])
  const [loading, setLoading]= useState(true)
  const [showBookForm, setBookForm]= useState(false)

  useEffect (() => {
    loadData()
  }, [])

  const loadData= async () => {
    try{
      console.log('getting data')
      let res = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5')
      setBooks(res.data.data)
      console.log('data loaded')
      setLoading(false)
    }catch(err){
      console.log(err)
      alert('Error, check log')
      setLoading(false)
    }
  }

  const deleteBook = (isbn) => {

    console.log(books)
    let filterBooks = books.filter( book => book.isbn !==isbn)
    setBooks(filterBooks)
    console.log(filterBooks)

  }

  const addBook = (book) => {
    console.log('Added Book:')
    console.log(book)
    let isbnBook = {...book, isbn:Math.random()}

    setBooks([isbnBook, ...book])
  }

  return (
    <div className="App">
      <h1 style={{fontSize:'115px'}}>Book Catalog</h1>
      <button onClick={()=> setBookForm(!showBookForm)}> {showBookForm ? "hide" : 'show'}</button>
      {showBookForm && <BookForm addBook={addBook} />}
      {loading && <p>Loading</p>}
      <Book deleteBook={deleteBook} books={books}/>
    </div>
  );
}

export default App;
