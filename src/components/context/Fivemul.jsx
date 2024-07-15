import React,{useContext} from "react";
import {counterContext} from '../../App'
export default function Fivemul(){
    const {count,setCount} = useContext(counterContext);
    return(
        <>
        <button onClick={()=>setCount(count*5)}>
            *5
        </button>
        </>
    )
 }