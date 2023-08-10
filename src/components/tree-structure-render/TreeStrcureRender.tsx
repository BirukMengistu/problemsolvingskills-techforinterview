


import React, { useState } from 'react'
import { Files } from './File'
type files={
 name:string,
 childern?:files[],
 type?:string
}
const ListFile =({file , depth}: {file:files ,depth: number})=>{

    const [isExpand , setExpand]=useState(false)


    return (
        <div style={{ borderLeft:'2px solid green', padding:'.63rem'}}>
         {file.childern ? <button onClick={()=>setExpand(isExpand=>!isExpand)}>
              {isExpand?'-':'+'} 
               {file.name}
               {file.type} 
        </button> :
        <div>{file.name}
        {file.type}  </div>}

      
      {isExpand && <div style={{paddingLeft:`${depth*10}px`}}>
                
                {file.childern?.map(file => 
                    <ListFile file={file} depth={depth+1}/>
                    )}
        </div> }
        
    </div>)
}
const TreeStrcureRender = () => {
    
  return (
    <div>
      {Files.childern.map(file => <ListFile file={file} depth={1}/>)}
    </div>
  )
}

export default TreeStrcureRender
