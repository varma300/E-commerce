import React from 'react'
import './admin.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { context } from './Context'
import { useContext } from 'react'


function Adminnav() {
  const navigate= useNavigate();
const data=useContext(context);
const {search,setsearch}= data;
const searchHandle = (element)=>{
   setsearch(element.target.value);
   navigate('admin/search');
}

  return (



    <div>
      
        <div className="sidebar">
  
  <div className="sidebar-item">
      <input type="text" placeholder="Search" onChange={searchHandle}/>
    </div>
    <div className="sidebar-item"> 
  <Link to='/admin/userdata'>User Details</Link>  </div>
  <div className="sidebar-item">
    <Link to='/admin/allProducts'>AllProducts</Link>
  </div>
  <div className="sidebar-item">
  <Link to='/admin/add'>Add Product</Link> 
   </div>
 
</div>
<Outlet/>
    </div>

  )
}

export default Adminnav