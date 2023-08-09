import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import  LongestNonRepChar from './components/longestnonrepeatingchar/LongestNonRepChar';
import './App.css';

 const Home=()=>{
  return(
    <div className="App">
     <h3>welcome to Birdev</h3>
     <h5>use route to check result </h5>
     <p>/lengthofLongestSubstring</p>
  </div>
  )
 
}
function App() {
  return (
    <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lengthofLongestSubstring" element= {<LongestNonRepChar />} />
       
      </Routes>
   
  </BrowserRouter>
  );
}

export default App;
