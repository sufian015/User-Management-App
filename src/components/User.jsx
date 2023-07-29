import React from 'react'

import { useUserContext } from '../Hooks/useUser.jsx';

const User = ({user}) => {

     const{users,setUsers}=useUserContext();

     const{id,name}=user;

     const handleDelete=(id)=>{
         const fillteredUsers=users.filter((newuser)=>newuser.id !== id);
         setUsers(fillteredUsers);
     }
    

  return (
    <article className='user'>

          <h3>{id}</h3>
          <p>{name}</p>
          <button onClick={()=>handleDelete(id)}>Delete</button>



    </article>
  )
}

export default User
