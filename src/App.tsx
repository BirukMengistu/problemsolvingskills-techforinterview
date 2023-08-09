import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import  LongestNonRepChar from './components/longestnonrepeatingchar/LongestNonRepChar';
import './App.css';
import HigestScoring from './components/highest-scoring-word/higestscoring';
import StringIncermenter from './components/stringIncerment/StringIncermenter';

 const Home=()=>{
  return(
    <>
     <h3>welcome to Birdev</h3>
     <h5>use route to check result </h5>
     <div className='listoftask'>
        <p><Link to='/lengthofLongestSubstring'> 1. /lengthofLongestSubstring</Link></p>
        <p><Link to ='/higestsoringword'> 2. /higestsoringword</Link></p>
        <p><Link to ='/incermentstring'> 3./incermentstring</Link></p>
     </div>
     

  </>
  )
 
}
function App() {
  return (
     <> 
       <header></header>
       <main>
      <BrowserRouter> 
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lengthofLongestSubstring" element= {<LongestNonRepChar />} />
          <Route path="/higestsoringword" element= {<HigestScoring />} />
          <Route path="/incermentstring" element= {<StringIncermenter />} />
        </Routes>

        </BrowserRouter>
    </main>
      
    
   
    <footer/>
     </>
    
    
  );
}

export default App;
