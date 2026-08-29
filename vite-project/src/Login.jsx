import React, { useState } from 'react'
import Signup from './Signup'
import F_password from './F_password'
import {Mail, Lock} from 'lucide-react'
import {Link} from 'react-router-dom'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const handleLoginSubmit = async(e) => {
    e.preventDefault(); 

    
  const login = await fetch("http://localhost:8000/api/Login",{
    method : "POST",
    headers: {
      "Content-Type" : "application/JSON"
    },
    body: JSON.stringify({email, password})
  })

  const data = await login.json()
  if(login.ok){
    alert(data.msg)

  }else{
    alert(data.msg || "Login failed")
  }

  };

  return (

    <form onSubmit = {handleLoginSubmit} className="flex flex-col justify-center items-center h-screen w-full px-4" method="POST">

  <div className="flex flex-col justify-center items-center w-full max-w-[440px] sm:w-110 rounded-lg border-gray-500 border-2 font-sans shadow-lg overflow-hidden bg-white">
      
    <div className="bg-green-500 h-22 w-full text-white flex justify-center items-center shadow-lg">
      <h2 className="text-4xl font-bold">Login</h2>
    </div>

    <div className="flex flex-col items-center gap-3 mt-10 w-full px-4">

      <div className="relative h-15 w-full flex justify-center">
        <Mail className="h-6 w-6 text-gray-500 absolute left-4 top-4.5 sm:left-14 sm:top-4.5" />
        <input type="email" required name="email" id="email" placeholder='Email' value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-md p-2 h-15 w-full sm:w-82 pl-15" />
      </div>
        
      <div className="relative h-15 w-full flex justify-center">
        <Lock className="h-6 w-6 text-gray-500 absolute left-4 top-4.5 sm:left-14 sm:top-4.5" />
        <input type="password" name="password" id="password" placeholder="Password" maxLength={'5'} required pattern='!@#$%^&*()+=-.,<>?/\|{}[]`~;:' title="Password must contain one special character" value={password}
           onChange={(e) => setpassword(e.target.value)}
           className="border border-gray-300 rounded-md p-2 h-15 w-full sm:w-82 pl-15"/>
      </div>

    </div>

    <div className="flex flex-col gap-3 mt-3 items-center w-full px-4">
      <div className="h-12 w-full flex justify-center">
        <button type="submit" className="border border-gray-300 rounded-md p-2 bg-green-500 h-12 w-full sm:w-82 text-white font-bold text-2xl hover:bg-green-800 hover:cursor-pointer">Login Successful</button>
      </div>
     
     <div className="flex flex-col gap-3 mt-3 items-center">
        <h2> <Link to="/F_password" className="font-semibold text-green-700 text-lg">Forgot Password? </Link></h2>
     </div>
   
    </div>

    <div className="flex flex-col gap-3 mt-3 mb-6 items-center">
      <span>Don't have an account? <Link to = '/Signup' className="text-green-600 font-bold">Signup Now</Link></span>
    </div>

  </div>

</form>
  )
}
