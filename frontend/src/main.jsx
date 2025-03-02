import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Homepage from './components/Homepage.jsx'
import Fiction from './components/Fiction.jsx'
import NonFiction from './components/NonFiction.jsx'
import AddBook from './components/AddBook.jsx'
import BookContextProvider from './context/BooksContextProvider.jsx'
import Comics from './components/Comics.jsx'

createRoot(document.getElementById('root')).render(
  <BookContextProvider>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/fiction' element={<Fiction />} />
          <Route path='/nonFiction' element={<NonFiction />} />
          <Route path='/comics' element={<Comics />} />
          <Route path='/add' element={<AddBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </BookContextProvider>
  
)
