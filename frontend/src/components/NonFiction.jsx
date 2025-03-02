import React, { useContext } from 'react'
import BookContext from '../context/BookContext'

const NonFiction = () => {
  const {books} = useContext(BookContext)
  return (
    <div>
      <div className='flex flex-wrap gap-10 p-10'>
      {books && 
      books.map((book) => book.category_id === 2 && 
        (
          <div className="card card-border bg-primary w-96">
            <div className="card-body">
              <h2 className="card-title">{book.name}</h2>
              <p>{book.author}</p>
              <p>In Stock: {book.stock}</p>
            </div>
          </div>
        )
      )
      }
     </div>
    </div>
  )
}

export default NonFiction
