import axios from 'axios'
import React, { useState } from 'react'

const BookForm = () => {
    const initialData= {
        id:'',
        Title:'',
        Author:'',
        Image:'',
        Price:0,
        Description:'',
        ISBN:''
      }
      const [formData,setFormData] = useState(initialData)
      const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
      }
      const {Title,Author,Price,Description,ISBN,Image}=formData
      const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/bookStore/addBookStoreData',formData).then((res)=>{console.log(res.data)
          alert('data added')
        }).catch(err=>console.log(err))
      }
  return (
    <div>
    <h1  style={{textAlign:"center",paddingTop:"20px"}}>ADD PRODUCT</h1>
     <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder="Title" name='Title' value={Title} onChange={(e)=>handleChange(e)}/> 
        <input type="text" placeholder="Author" name='Author' value={Author} onChange={(e)=>handleChange(e)}/> 
        <input type="text" placeholder="Image" name='Image' value={Image} onChange={(e)=>handleChange(e)}/> 
        <input type="text" placeholder="Price" name='Price' value={Price} onChange={(e)=>handleChange(e)}/>
        <input type="text" placeholder="Description" name='Description' value={Description} onChange={(e)=>handleChange(e)}/> 
        <input type="text" placeholder="ISBN" name='ISBN' value={ISBN} onChange={(e)=>handleChange(e)}/>
        <input type="submit"/>
      </form>
  </div>
  )
}

export default BookForm
