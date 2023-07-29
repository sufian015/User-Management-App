import React,{useState,createContext} from "react"; 

export const UsersContext=createContext({});


export const UserProvider=({children})=>{

     const  [users,setUsers]=useState([
          {id:1,name:"Faisal Ahmed"},
          {id:2,name:"sufian"}
         ])

         

   return <UsersContext.Provider value={{users,setUsers}}>
    

      {children}
        
      
    </UsersContext.Provider>




}

