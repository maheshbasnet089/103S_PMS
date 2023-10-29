import { useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import './AddProduct.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {
    const navigate = useNavigate()
    // FIRST approach
    // const [productImage,setProductImage] = useState("")
    // const [productName,setProductName] = useState("")
    // const [productDescription,setProductDescription] = useState("")
    // const [productMaterial,setProductMaterial] = useState("")

    // const addProduct = async(e)=>{
    //     e.preventDefault()
    //   const response =  await axios.post("https://652fbacd6c756603295d8ebc.mockapi.io/products",{
    //        productImage :  productImage,
    //        productMaterial : productMaterial,
    //        productDescription : productDescription,
    //        productName : productName
    //     })
    //     console.log(response)
    // }
    
    // SECOND APPROACH
    // const addProduct = async (e)=>{
    //     e.preventDefault()
    //     const formData = new FormData(e.currentTarget); // {}
     
    //    const data =  Object.fromEntries(formData)
    //  const response =   await axios.post("https://652fbacd6c756603295d8ebc.mockapi.io/products",data)
    //  console.log(response)
    // }
    
    //Third Approach
    const [data,setData] = useState({
        productName : "",
        productDescription : "",
        productMaterial : "",
        productImage : ""
    })
//     const data = {
//         productName : "",
//         productDescription : "",
//         productMaterial : "",
//         productImage : "hello"
//     }

//    data =  {
//         productName : "thisisname",
//         productDescription : "",
//         productMaterial : "",
//         productImage : "hello"
//     }
//    data =  {
//         productName : "thisisname",
//         productDescription : "thisisdescription",
//         productMaterial : "",
//         productImage : "hello"
//     }

//  data =    {
//         productName : "thisisname",
//         productDescription : "thisisdescription",
//         productMaterial : "thisismaterial",
//         productImage : "hello"
//     }
    const handleChange = (e)=>{
     const {name,value} = e.target
        setData({
            ...data,
            [name] : value
        })
       
     }

    const addProduct = async(e)=>{
        e.preventDefault()
      const response =   await axios.post("https://652fbacd6c756603295d8ebc.mockapi.io/products",data)
      if(response.status == 201){
       navigate("/")
      }else{
        alert("Something went wrong.Try Again")
      }

    }
  return (
    <>
    <Navbar />
    <div id="product-form">
    <h2>Product Information</h2>
    <form onSubmit={addProduct}>
      <label htmlFor="productImage">Product Image:</label>
      {/* <input type="text" id="productImage" name="productImage" onChange={(e)=>setProductImage(e.target.value)}  />
      
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" onChange={(e)=>setProductName(e.target.value)} />
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" rows="4" onChange={(e)=>setProductDescription(e.target.value)} ></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input type="text" id="productMaterial" name="productMaterial" onChange={(e)=>setProductMaterial(e.target.value)} /> */}
      
      {/* <input type="text" id="productImage" name="productImage"   />
      
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName"  />
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" rows="4" ></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input type="text" id="productMaterial" name="productMaterial" /> */}


<input type="text" id="productImage" name="productImage" onChange={handleChange}   />
      
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" onChange={handleChange}  />
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" rows="4" onChange={handleChange} ></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input type="text" id="productMaterial" name="productMaterial" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  </div>
    </>
  )
}

export default AddProduct