import React, { useContext } from 'react'
import { counterContext } from '../../App';


const Button = ()=>{
    const {count,setCount} = useContext(counterContext);
    return(
        <>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        </>
    )
}
export default Button;