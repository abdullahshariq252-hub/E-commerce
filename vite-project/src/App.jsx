import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Signup from './Signup'
import Login from './Login'
import F_password from './F_password'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import {useAuth0} from '@auth0/auth0-react'

function App() {
  
  //  const [currentPage, setCurrentPage] = useState('Login');

  return (
    
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Login />}     />
        <Route path='/Login' element={<Login />}     />

        <Route path='/Signup' element={<Signup />}     />

        <Route path='/F_password' element={<F_password />}     />

        <Route  path='/Footer' element={<Footer />}       />

      </Routes>
     
    </BrowserRouter>

    
  
  )
}

export default App
