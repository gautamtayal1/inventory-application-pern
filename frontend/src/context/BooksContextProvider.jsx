import React, { useEffect, useState } from "react";
import BookContext from "./BookContext";
import axios from 'axios'

const BookContextProvider = ({children}) => {
  const BASE_URL = "http://localhost:3000"

  const [books, setbooks] = useState([])
  const getBooks = async() => {
    try{
      const res = await axios.get(BASE_URL, {}, {withCredentials:true})
      console.log(res.data);
      setbooks(res.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  const deleteBook = async (id) => {
    try{
      await axios.post(BASE_URL + "/delete", {
        id:id
      }, {withCredentials:true})
      setbooks((prev) => 
        prev.filter(book => book.id !== id) 
      )
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  return(
    <BookContext.Provider value={{ books, getBooks, deleteBook }}>
      {children}
    </BookContext.Provider>
  )
}

export default BookContextProvider