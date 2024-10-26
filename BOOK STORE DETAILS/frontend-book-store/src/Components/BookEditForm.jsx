import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookEditForm = () => {
  const {id} =useParams()
  const initialData= {
    _id:'',
    Title:'',
    Author:'',
    Image:'',
    Price:0,
    Description:'',
    ISBN:''
  }
  const [formData, setFormData] = useState(initialData);

  const getSingleData = () => {
    axios
      .get(`http://localhost:3001/bookStore/getSingleBookStoreData/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const {Title,Author,Price,Description,ISBN,Image}=formData
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/bookStore/updateBookStoreData/${id}`, formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSingleData();
  }, [id]);
  return (
    <div>
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

export default BookEditForm
