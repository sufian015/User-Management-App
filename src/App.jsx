import React from "react"
import Users from "./components/Users"
import NewUser from "./components/NewUser"
import {UserProvider} from './context/UserContext.jsx'


function App() {

  

  return (
    <UserProvider>

      
        <Users />
        <NewUser  />

      
        
      
    </UserProvider>
  )
}

export default App
