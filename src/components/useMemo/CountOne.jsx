import React from 'react'
import { useState } from 'react';

const CountOne = () => {
    console.log("Count one is running...🏃‍➡️🏃‍➡️")
    const [count1, setCount1] = useState(1);
    const [count, setCount] = useState(1);
    function increament(){
        let i=0;
        while(i<2000000000){i++;}
    setCount1(count1 +1)
    }
    function inc(){
        setCount(count +1)
    }
  return (
    <div>
      <button onClick={increament}>count-{count1}</button>
      <button onClick={inc}>count-{count}</button>
    </div>
  )
}

export default CountOne
