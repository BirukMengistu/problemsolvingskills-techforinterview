import React,{useState} from 'react'
import './styles.css'
const lengthOfLongestSubstring=(s:string)=> {
    let max = 0 ,start = 0 , exitInMap:any = {};
    for (let i = 0; i < s.length; i++) {
     let lastChar= s[i]
     
        if (lastChar in exitInMap) {
            start =Math.max(start, exitInMap[lastChar] + 1)
           }
         exitInMap[lastChar]=i
         max = Math.max(max, i - start + 1)
        }
    
    return max
};

 const LongestNonRepChar = () => {
    const [input, setInput] = useState<string>('')
    const [result, setResult]=useState<number>(0)
    const handleTask=(str:string)=>{
        return  setResult(lengthOfLongestSubstring(str))
    }
  return (
    <div className='container'> 
        <h3>Solution for Longest non repeating Char</h3>
       <div className='input-box'>
          <label>Enter given string</label>
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

export default LongestNonRepChar
