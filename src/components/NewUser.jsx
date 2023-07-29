import React, { useState } from 'react'

import { useUserContext } from '../Hooks/useUser'

const NewUser = () => {

     const{setUsers}=useUserContext();
     const [name,setName]=useState("")
     const handleChange=(event)=>{
          setName(event.target.value)
     }

     const handleSubmit=(e)=>{

          e.preventDefault();
          const newUser={id:new Date().getTime().toString(),name:name};
          setUsers((prevUser)=>[...prevUser,newUser]);
          
          setName("");

     }



  return (
    <div>
     <h2>User Registration</h2>
     <form onSubmit={handleSubmit}>
          <input type="text" name='name' value={name} onChange={handleChange}  />
          <button type='submit'>Add User</button>
     </form>
      
    </div>
  )
}

export default NewUser
