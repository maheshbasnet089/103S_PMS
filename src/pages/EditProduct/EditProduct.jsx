import Navbar from "../../components/Navbar/Navbar"
import "./EditProduct.css"

const EditProduct = () => {
  return (
  <>
    <Navbar />
    <div id="product-form">
    <h2>Edit Product</h2>
    <form>
      <label htmlFor="productImage">Product Image:</label>


<input type="text" id="productImage" name="productImage"    />
      
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName"   />
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" rows="4"  ></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input type="text" id="productMaterial" name="productMaterial"  />
      <button type="submit">Submit</button>
    </form>
  </div>
  </>
  )
}

export default EditProduct