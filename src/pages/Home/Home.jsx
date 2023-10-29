import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import axios from 'axios'


const Home = () => {
    const [products,setProducts ] = useState([])
    const fetchProducts = async ()=>{
     const response =   await axios.get("https://652fbacd6c756603295d8ebc.mockapi.io/products")
     setProducts(response.data)
        
    }

    useEffect(()=>{
        fetchProducts() 
    },[])
   
  return (
    <>
    <Navbar />
    <div className="card-container">

    {
        products.map((product)=>{
            return (
                <div key={product.id} className="card">
                <img src={product.productImage} alt="Product Image" />
                <h2 className="product-name">{product.productName}</h2>
                <p className="product-description">{product.productDescription}</p>
                <p>{product.productMaterial}</p>
                </div>
            )
        })
    }
    </div>
    
    </>

  )
}

export default Home