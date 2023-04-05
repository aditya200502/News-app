import React, { useRef, useState } from "react";

function Userform() {
    // const[name,setName] = useState('');

    const nameRef = useRef(null);
    const fruitRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("submit clicked");
        // console.log(nameRef.current);
        console.log(nameRef.current.value);
        console.log(fruitRef.current.value);
    }

    function handleChange(event) {
        console.log(event.target.value);
    }
    return (
        // here onsubmit will submit the form just on pressing enter.
        <form onSubmit={handleSubmit} style={{ padding: "20px", margin: "20px" }}>
            <label>Name</label>
            {/* <input type="text" onChange={(event) => setName(event.target.value)} /> */}
            <input type="text" ref={nameRef} />
            <button onClick={handleSubmit}>Submit</button>

            {/* select option */}
            <select onChange={handleChange} ref={fruitRef}>
                <option value="guava">Guava</option>
                <option value="mango">Mango</option>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
            </select>
        </form>
    );
}

export default Userform;
