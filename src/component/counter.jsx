import React, { useState } from 'react'

function counter() {

    const [counter , setCounter] = useState(4)

     const clickDesc = ()=>{
       const update = counter - 1;
       setCounter(update)
     }

     const clickInsc = ()=>{
      const update = counter + 1;
      setCounter(update)
     }
  return (
    <>
      <div>
            <button onClick={clickDesc}>low</button>
            <p>{counter}</p>
            <button onClick={clickInsc}>high</button>

      </div>
    </>
  )
}

export default counter