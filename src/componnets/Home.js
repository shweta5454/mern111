import React, { useState } from 'react'
import {Link} from 'react-router-dom'
// import User from './User';

import '../style/form.css'

export default function Home() {
  const[userLog,setuserLog]=useState({
    name:"",
    username:"",
  })

  const handleLogin=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    console.log(name,value);
    setuserLog({...userLog,[name]:value})
  }
  return (
    <div className="container-sm ">
           <div className="row align-content-start rowstyle ">
               <h1 className="mt-5">Enter the credentials</h1>
               
               <div className="col-12  form-control text-center mt-3" >
                <input type="text"
                autocomplete="off"
                 name="name" 
                 value={userLog.name} 
                onChange={handleLogin}
                placeholder="Enter your name"/>
               </div>

               <div className="col-12 form-control mt-2 text-center">
                <input type="text" 
               autocomplete="off" 
               name="username"
                value={userLog.username} 
                onChange={handleLogin}
                placeholder="Enter your username"/>
               </div>

               <div className=" text-center ">
                <div className="d-grid gap-2 mt-2">
                   <Link to={`/user?user=${userLog.name}&&username=${userLog.username}`}> <button className="btn " type="button" >Submit</button></Link>
                  </div>
               </div>
                
           </div>
    </div>
  )
}
