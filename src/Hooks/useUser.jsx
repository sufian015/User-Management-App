import React,{useContext} from "react";
import { UsersContext } from "../context/UserContext";





export const useUserContext=()=>{

     return useContext(UsersContext);



}