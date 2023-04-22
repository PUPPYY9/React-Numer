import { useState } from 'react'
import './App.css'
import Sample from './Bisection'
import FalsePosition from './FalsPosition'
import {  BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar2 from './Navbar2'
import 'bootstrap/dist/css/bootstrap.min.css';
import OnePoint from './One-Point'
import OP from './One-Point'
import Regres from './Regression'
import Regression2 from './Regression2'
import Regression3 from './Regression3'
import Re4 from './Regression4'
import Regression from './Rey'
import RegressionYel2 from './ReY2'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar2/>
      <BrowserRouter>
        <Routes>
        <Route path="/bisection" element={<Sample/>}/>
        <Route path="/FalsePosition" element={<FalsePosition/>}/>
        <Route path="/One-Point" element={<OP/>}/>
        <Route path="/Regression" element={<Regres/>}/>
        <Route path='/Regression2' element={<Regression2/>}/>
        <Route path='/Regression3' element={<Regression3/>}/>
        <Route path='/Regression4' element={<Re4/>}/>
        <Route path='/Rey' element={<Regression/>}/>
        <Route path='/Rey2' element={<RegressionYel2/>}/>
        
        
        </Routes>
      </BrowserRouter>
      
      

    </div>
  )
}

export default App
