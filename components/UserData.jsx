import React, { useContext } from 'react';
import './userData.css';
import { context } from "./Context";


function UserData() {
  const data=useContext(context);
  const {users}=data;

  return (
    <div className='boss' >
         <div class="admin-panel">
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      {users.map((item)=>(
         <tbody>
        
        <tr>
          <td>{item.name}</td>
          <td>{item.email}</td>
        </tr>
      </tbody>
      )
      )}
     
    </table>
  </div>
</div>
</div> 
    
  )
}

export default UserData