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
import Header from './components/header/Header';
import SideNav from './components/header/Nav';
import TreeStrcureRender from './components/tree-structure-render/TreeStrcureRender';
import Sidebar from './components/header/sidebar';
import Citiesbasedcountry from './components/select-city-based-country/Citiesbasedcountry';

 const Home=()=>{
  return(
 
    <div className='main-area'>
    <h3>HackerRank and Codeware </h3>
     <div className='listoftask'>
        <p><Link to='/lengthofLongestSubstring'> 1. Length Sub string</Link></p>
        <p><Link to ='/higestsoringword'> 2. Higest socring word from the given text</Link></p>
        <p><Link to ='/incermentstring'> 3. Incerment digit from the given string</Link></p>
        <p><Link to ='/treestructure'> 4. Tree structure rendering</Link></p>
        <p><Link to ='/cityandcountry'> 5. Cities based on country</Link></p>
        
     </div>
    </div>
   
     

 
  )
 
}
function App() {
  return (
     <div className='App'> 
       <Header/>
       <nav><SideNav/></nav>
       <main>
      <BrowserRouter> 
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lengthofLongestSubstring" element= {<LongestNonRepChar />} />
          <Route path="/higestsoringword" element= {<HigestScoring />} />
          <Route path="/incermentstring" element= {<StringIncermenter />} />
          <Route path="/treestructure" element= {<TreeStrcureRender />} />
          <Route path="/cityandcountry" element= {<Citiesbasedcountry />} />
        </Routes>
      </BrowserRouter>
    </main>
     <aside><Sidebar/></aside>
   
    <footer></footer>
     </div>
    
    
  );
}

export default App;
