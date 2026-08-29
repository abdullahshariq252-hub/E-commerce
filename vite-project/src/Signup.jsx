import React, { useState } from 'react'
import {Mail, Lock, Phone} from 'lucide-react'
import Login from './Login'

import {Link} from 'react-router-dom'

export default function Signup() {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [phone, setphone] = useState('')

  const handleSignupSubmit = async (e) => {
    e.preventDefault()
    
    const response = await fetch('http://localhost:8000/api/Signup' , {
    method : "POST",
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({email, password, phone})
  })

    const data = await response.json()
    if (response.ok) {
      alert("Signup Successful",data)
    }else
    {
      alert("Error",data.msg)
    }

  };

  return (
  <form onSubmit={handleSignupSubmit} className="flex flex-col justify-center items-center h-screen w-screen px-2" method='POST'>

    <div className ="justify-center items-center h-120 w-full max-w-[440px] sm:w-110 rounded-lg border-gray-500 border-2 font-sans shadow-lg ">
      
      <div className="bg-green-500 h-22 text-white flex justify-center items-center shadow-lg">
        <h2 className="text-4xl font-bold">Signup</h2>
      </div>

    <div className="flex flex-col items-center gap-3 mt-10">

      <div className="h-15 ">
        <Mail className="h-6 w-6 text-gray-500 absolute m-5" />
        <input type="email" name="email" id="email" placeholder='Email' value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-md p-2 h-15 w-82 pl-15" />
      
      </div>
        
      <div className="h-15 ">
        <Lock className="h-6 w-6 text-gray-500 absolute m-5" />
        <input type="password" name="password" id="password" placeholder="Password" value={password}
        onChange={(e) => setpassword(e.target.value)}
        className="border border-gray-300 rounded-md p-2 h-15 w-82 pl-15"/>
      </div>

      <div className="h-15 ">
        <Phone className="h-6 w-6 text-gray-500 absolute m-5" />
        <input type="tel" name="phone" id="phone" placeholder='Phone' value={phone}
        onChange={(e) => setphone(e.target.value)}
        className="border border-gray-300 rounded-md p-2 h-15 w-82 pl-15" />
      
      </div>


    </div>

  <div className="flex flex-col gap-3 mt-3 items-center">
      

      <div className="h-12 ">
        <button type="submit" className="border border-gray-300 rounded-md p-2 bg-green-500 h-12 w-82 text-white font-bold text-2xl hover:bg-green-800 hover:cursor-pointer">Signup Successfully</button>
      </div>

    </div>
    <div className="flex flex-col gap-3 mt-3 items-center">
      <span>Already Signup <Link to = "/Login"className="text-green-600 font-bold">Login Now</Link></span>
    </div>
  
    </div>

    </form>
  )
}
