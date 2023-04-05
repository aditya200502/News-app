import React, { useEffect, useRef, useState } from 'react'

function UseRef() {

  const [counter, setcounter] = useState(0);

  let normalCounter = 0;//*** */

  const countRef = useRef(0)

  useEffect(() => {

    console.log('state counter',counter);
    console.log('normal counter',normalCounter);
    console.log('ref counter',countRef.current);

    return () =>{
      console.log("Unmounting occurs");
    }
  })

  function increment() {
    setcounter(counter+1);
    normalCounter =normalCounter + 1;
    countRef.current = countRef.current + 1;
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseRef