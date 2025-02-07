import React, { useReducer } from "react";
const initialState  = 0;
const reducer=(state, action)=>{
    switch(action){
        case 'inc':
            return state +1
        case 'dec':
            return state-1
        case 'reset':
            return 0
    }
}

const ReduceCounter = () => {
 const [count , dispatch]=   useReducer(reducer,initialState)
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>dispatch('inc')}>+</button>
      <button onClick={()=>{dispatch('dec')}}>-</button>
      <button onClick={()=>{dispatch('reset')}}>Reset</button>
      
    </div>
  );
};

export default ReduceCounter;
