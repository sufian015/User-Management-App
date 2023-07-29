import React  from 'react'
import User from './User'

import { useUserContext } from '../Hooks/useUser'

const Users = () => {

    const {users}= useUserContext();
  return (
       <section className='users'>

          {users.map(user=> <User key={user.id} user={user} />)}
       </section>
  )
}

export default Users
