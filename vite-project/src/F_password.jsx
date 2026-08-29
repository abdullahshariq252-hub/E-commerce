import React from 'react'
import {Lock} from 'lucide-react'
import Login from './Login'
import { Link } from "react-router-dom"

export default function F_password() {
  return (
    
    <form className="flex flex-col justify-center items-center h-screen w-screen px-2">

        <div className ="justify-center items-center h-80 w-full max-w-[440px] sm:w-110 rounded-lg border-gray-500 border-2 font-sans shadow-lg ">
      
    
            <div className="flex flex-col items-center gap-3 mt-10">

                <div className="h-15 ">
                    <Lock className="h-6 w-6 text-gray-500 absolute m-5 " />
                    <input type="password" name="New_password" id="New_password" placeholder='New_password' className="border border-gray-300 rounded-md p-2 h-15 w-82 pl-15" />
      
                </div>
        
                <div className="h-15 ">
                    <Lock className="h-6 w-6 text-gray-500 absolute m-5" />
                    <input type="password" name="Repeat_password" id="Repeat_password" placeholder="Repeat_password" className="border border-gray-300 rounded-md p-2 h-15 w-82 pl-15"/>
    
                </div>
            
            </div>

            <div className="flex flex-col gap-3 mt-3 items-center">
      

                <div className="h-12 ">
                    <button type="submit" className="border border-gray-300 rounded-md p-2 bg-green-500 h-12 w-82 text-white font-bold text-2xl hover:bg-green-800 hover:cursor-pointer">Password Submitted!</button>
                </div>

            </div>
           
        <div className="flex flex-col gap-3 mt-3 items-center">
          
            <span>Password Submitted Successfully! <Link to = '/Login' className="text-green-600 font-bold">Login Now</Link></span>

        </div>
  
        </div>

    </form>
    
  )
}
