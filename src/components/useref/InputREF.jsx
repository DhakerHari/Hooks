import React, { useEffect, useState } from 'react'
import {useRef} from 'react'

const InputREF = () => {
    const [name ,setName]= useState(' ');
    const refName = useRef();

    useEffect(()=>{
       refName.current = name;
        },[name])
    // function handleclick(){
    //     let name = prompt("Enter a string"); 

    // }
    
  return (
    <div>
      <input  value={name} onChange={ele=>setName(ele.target.value)} />
      {/* <button onClick={handleclick}>click here</button> */}
      <h1>{name} <br /> {refName.current}</h1>
      
    </div>
  )
}

export default InputREF
