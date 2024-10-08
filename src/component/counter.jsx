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
            {/* //welcome to my counter */}
            {/* {welcome} */}
            {/* {welcome} */}
            <p>welcome to my profile</p>
            <p>welcome to the destination</p>
            <p>welcome to home</p>
            <p>its hard question</p>
            <button>syubmit</button>
            <button>rrrr</button>
            
            <button onClick={clickInsc}>high</button>

      </div>
    </>
  )
}

export default counter