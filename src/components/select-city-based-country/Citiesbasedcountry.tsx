import { Counries } from "./countries";
import React,{useState} from 'react'

const Citiesbasedcountry = () => {
    //country hooks
    const [country, setCountry]= useState<string>('')
    const city:any = country && Counries?.filter(value => value.name===country)
     .map(value=>value.city)
    
                  
   
  return (
    <div className="content-box">
              {/* select option for Country */}
              <select value={country} onChange={(e)=>setCountry(e.target.value)}>
                { Counries?.map( value => 
                            <option >
                                {value.name}
                            </option>)
                         }
                 </select>
                 {/* select option for city */}
                 <select >
                 { city[0]?.map((temp: string | number | boolean ) =>
                            <option >
                                {temp}
                            </option>)
                         } 
                 </select>
                        
    </div>
  )
}

export default Citiesbasedcountry
