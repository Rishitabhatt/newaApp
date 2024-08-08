import React, { useState } from 'react'
const Test = () => {
    let [count,testCount] = useState(10);
    let [name,setName] = useState([]);
    // useState hook returns array

    function increment(){
        testCount(count=count+1);
    }

    function updateValue(evnt){
        console.log(evnt.target.value)
    }
  return (
    <div>
        <h4>{count}</h4>
        <h2>{name}</h2>
        <button onClick={increment}>Increment</button>
        <form>
            <label>Name</label>
            <input type="text" name="name" onChange={(e)=>updateValue(e)}/>
        </form>
    </div>
  )
}

export default Test