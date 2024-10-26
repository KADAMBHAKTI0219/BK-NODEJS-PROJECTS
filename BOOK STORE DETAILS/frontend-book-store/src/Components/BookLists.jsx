import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BookLists = () => {
    const [getBookData,setBookData] = useState([])
    const getBookStoreData = ()=>{
      axios.get('http://localhost:3001/bookStore/getBookStoreData').then(res=>setBookData(res.data)).catch(err=>console.log(err))
    }
  
    const deleteData = (id)=>{
      axios.delete(`http://localhost:3001/bookStore/deleteBookStoreData/${id}`).then(res=>getBookStoreData()).catch(err=>console.log(err))
    }
    useEffect(()=>{
        getBookStoreData()
    },[])
  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Remove</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          getBookData.map((el)=>(
            <tr key={el._id}>
              <td><Link to={`/bookDetails/${el._id}`}>{el.Title}</Link></td>
              <td><button onClick={()=>deleteData(el._id)}>Remove</button></td>
              <td><Link to={`/bookEditForm/${el._id}`}>Edit</Link></td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div>
  )
}

export default BookLists
