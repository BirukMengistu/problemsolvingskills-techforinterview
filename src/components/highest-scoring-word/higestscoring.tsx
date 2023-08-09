import React,{useState} from 'react'



interface curObj{
    'value':string ,
    'score':number
}
const alpVal=(s:string)=>s.toLowerCase().charCodeAt(0)-97 +1

const high =(x:string) =>{
 let splitWord= x.split(' '), arr:any=[] ,result=0
 
 splitWord.map((val) => {
             val.split('').map(ch=>  result += alpVal(ch) )
            arr.push({'value':val, 'score': result})
            result=0  
        })  
  
  
 let max = arr.reduce((max:number,current:curObj)=>{
   return current.value ? Math.max(max, current.score): max
 },-Infinity )
 
let highValue = arr.filter((val:curObj) => val.score === max)
 

  return highValue[0]
}

 const HigestScoring = () => {
    const [input, setInput] = useState<string>('')
    const [result, setResult]=useState<curObj>()
    const handleTask=(str:string):void=>{
        return  setResult(high(str))
    }
  return (
    <div className='container'> 
        <h1>Solution for Highest scoring word from the given text</h1>
       <div className='input-box'>
          <label>Enter text</label>
           <textarea style={{width:'200px', height:'300px'}} placeholder='Enter given string'
            onChange={(e)=>setInput(e.target.value)}/>
       </div>

       <button onClick={()=>handleTask(input)}>
           Calculate
       </button>
        <p>The higest scoring word from give text - <span
        style={{fontWeight:'bold' , color:'green' }}>
            {result?.value}</span> and frequecy
            <span style={{fontWeight:'bold' , color:'green' }}> 
            {result?.score}  
            </span>
            </p>
    </div>
  )
}

export default HigestScoring