import React, { useContext } from 'react'
import BookContext from '../context/BookContext'

const Homepage = () => {

  const {books, deleteBook } = useContext(BookContext)

  return (
    <div className='flex flex-wrap gap-10 p-10'>
      {books && 
      books.map((book) => (
        <div className="card card-border bg-primary w-96" key={book.id}>
          <div className="card-body flex flex-row justify-between items-center"> {/* Changed here */}
            <div>
              <h2 className="card-title">{book.name}</h2>
              <p>{book.author}</p>
              <p>In Stock: {book.stock}</p>
            </div>
            <button 
            className='bg-base-100 p-2 rounded'
            onClick={() => deleteBook(book.id)}>Delete</button>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default Homepage
