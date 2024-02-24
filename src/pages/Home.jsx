import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import Cards from '../components/Cards'
import ImgMediaCard from '../components/Cards'
import ButtonAppBar from '../components/Navbar'

const Home = () => {

useEffect(()=>{ 
    getData()
},[])


const [products,setProducts] = useState([])

const getData = ()=>{
    const data= axios.get("https://fakestoreapi.com/products")
    .then((res)=>{console.log(res.data)
        setProducts(res.data)
         
    })
    .catch((err)=>{
        console.log(err)
    })
}

  return (
    <>
    <ButtonAppBar />
    <div style={{display:"flex",flexWrap:"wrap",gap:"70px"}}>
        { products.map((e,i)=>{
           return(  <ImgMediaCard key={i} image={e.image} title={e.title} desc={e.description} id={e.id}/>
            )})
}
    </div>
    </>
  )
}

export default Home