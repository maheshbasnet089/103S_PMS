import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  // const navigate = useNavigate()
  return (
    <div className="navbar">
    <Link to="/">Home</Link>
    {/* <a href="/addProduct">Add Product</a> */}
    <Link to="/addProduct">Add Product</Link>
    <Link to="/test">Test</Link>
    {/* <button onClick={()=>navigate("/addProduct")}> Add Product</button> */}

</div>

  )
}

export default Navbar