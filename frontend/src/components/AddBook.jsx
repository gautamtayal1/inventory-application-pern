import axios from 'axios'
import React, { useState } from 'react'

const AddBook = () => {

  const BASE_URL = "http://localhost:3000"
  const [name, setName] = useState("atomic habits")
  const [author, setAuthor] = useState("james clear")
  const [stock, setStock] = useState('200')
  const [category, setCategory] = useState('')

  const handleSubmit = async() => {
    try{
      if (!category) {
        alert("Please select a category");
        return;
      }

      const res = await axios.post(BASE_URL, {
        name: name,
        author: author,
        stock: stock,
        category_id: parseInt(category)     
       },{
        withCredentials:true
      })
      console.log(res)
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className='flex justify-center mt-[10vh]'>
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Add a book</legend>
        
        <label className="fieldset-label">Title</label>
        <input 
        type="text" 
        className="input" 
        placeholder="atomic habits" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        
        <label className="fieldset-label">Author</label>
        <input 
        type="text" 
        className="input" 
        placeholder="james clear" 
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        />
        
        <label className="fieldset-label">In Stock</label>
        <input 
        type="number" 
        className="input" 
        placeholder="Name"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
         />
        <label className="fieldset-label">Category</label>
          <select className="select"
          value={category || ''}
          onChange={(e) => {
            const value = e.target.value;
            setCategory(value === '' ? null : parseInt(value));
          }}>
            <option value="">Select an option</option>
            <option value="1">Fiction</option>
            <option value="2">Non-Fiction</option>
            <option value="3">Comics</option>
          </select>
          <button className="btn bg-secondary mt-4"
          onClick={handleSubmit}>Submit</button>
      </fieldset>
      
    </div>
  )
}

export default AddBook
