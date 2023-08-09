import React, { useState } from 'react'
const IncrementString = (str:string) :string=> {
    const newString = str.slice(0,-1)
  
    const lastDigit:any = str.slice(-1).match(/[0-9]/)
  
   return lastDigit === null? str+'1' :
                      lastDigit !== 9 
                      ? newString +(+lastDigit + 1)
                      :IncrementString(newString) +'0'
    
   
   
   // return incrementedString
 }


 
 const StringIncermenter = () => {
    const [input, setInput] = useState<string>('')
    const [result, setResult]=useState<any>()
    const handleTask=(str:string):void=>{
        return  setResult(IncrementString(str))
    }
   return (
    <div className='container'> 
    <h1>Solution for Longest non repeating Char</h1>
   <div className='input-box'>
      <label>Enter given stringwith combintion number <span>absde0234 or asdf123dcfr122</span></label>
       <input placeholder='Enter given string'
        onChange={(e)=>setInput(e.target.value)}/>
   </div>

   <button onClick={()=>handleTask(input)}>
       Calculate
   </button>
    <p>the Max number is - <span>{result}</span></p>
</div>
   )
 }
 
 export default StringIncermenter
 