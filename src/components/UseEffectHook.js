import React, { useEffect, useState } from 'react'

function UseEffectHook() {

    const [counter, setcounter] = useState(0);

    //cleanupwork is done here
    function CallOnUnmount () {

        console.log("Unmount time");

    }

    useEffect(() => {

        // console.log(counter,'counter updated');
        console.log("Use Effect");
        return CallOnUnmount;

    })

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => setcounter(counter + 1)}>Increment</button>
        </div>
    )
}

export default UseEffectHook