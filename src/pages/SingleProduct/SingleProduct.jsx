import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import './SingleProduct.css'
import axios from "axios"
import { useEffect, useState } from "react"

const SingleProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    // store product data coming in object 
    const [product,setProduct] = useState({})

    // delete product
    const deleteProduct = async()=>{
        // api hit to delete
       const response = await axios.delete("https://652fbacd6c756603295d8ebc.mockapi.io/products/" + id)
       if(response.status == 200){
        navigate("/")
       }else{
        alert("Something went wrong . Try again!!")
       }
    }

    // fetch single product
   const fetchSingleProduct = async ()=>{
    const response = await axios.get("https://652fbacd6c756603295d8ebc.mockapi.io/products/" + id)
    setProduct(response.data)
 
   }
   useEffect(()=>{
    fetchSingleProduct()
   },[])

  return (
    <>
    <Navbar />
    <div  className="card">
                <img src={product.productImage} alt="Product Image" />
                <h2 className="product-name">{product.productName}</h2>
                <p className="product-description">{product.productDescription}</p>
                <mark>{product.productMaterial}</mark><br/>
              <button onClick={deleteProduct} >Delete</button>
    </div>
    </>
  )
}

export default SingleProduct