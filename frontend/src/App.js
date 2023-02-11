import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Toaster from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
       <Toaster position="top-center" reverseorder={false} />
       <Routes>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>


       </Routes>
    </BrowserRouter>
    
  );
}

export default App;
