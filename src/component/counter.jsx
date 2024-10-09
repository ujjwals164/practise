import React, { useState } from 'react'

function counter() {
    const initialvalue = 4
    const [counter , setCounter] = useState(initialvalue)
    
     const clickDesc = ()=>{
       if(counter > initialvalue){
        setCounter(counter-1)
       }
     }

     const clickInsc = ()=>{
      const update = counter + 1;
      setCounter(update)
     }
return (
    <>
      <div>
            <button onClick={clickDesc} >low</button>
            
            <input type="text" min={counter} value={counter}/>
           
            <button onClick={clickInsc}>high</button>
            <button>click on</button>
            <button>click up</button>
            <button>click down</button>
            <button>select me </button>
            <button>click forward</button>

      </div>
    </>
  )
}

export default counter