import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookDetails = () => {
  const {id} = useParams()
  const initialData = {
    Title:'',
    Author:'',
    Image:'',
    Price:0,
    Description:'',
    ISBN:''
  }
  const [singleData,setSingleData] = useState(initialData)
  const getSingleData = ()=>{
      axios.get(`http://localhost:3001/bookStore/getSingleBookStoreData/${id}`)
      .then(res=>setSingleData(res.data))
      .catch(err=>console.log(err))
  }
  const {Title,Author,Price,Description,ISBN,Image}=singleData

  useEffect(()=>{
      getSingleData()
  },[id])
  return (
    <div className='descriptionBox'>
      <h1>{Title}</h1>
      <h2>{Author}</h2>
      <img src={Image} alt={Title} height={400} width={300}/>
      <h3>{Price}</h3>
      <h3>{ISBN}</h3>
      <p>{Description}</p>
    </div>
  )
}

export default BookDetails
