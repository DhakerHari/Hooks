import { useRef, useState, createContext, useCallback } from "react";
import Button from "./components/context/Button";
import "./App.css";
import Fivemul from "./components/context/Fivemul";
import ReduceCounter from "./components/useReducer/ReduceCounter";
import Count from "./components/useCallback/Count";
import CountOne from "./components/useMemo/CountOne";

export const counterContext = createContext();

function App() {
  console.log("App.jsx rendering....");
  const [count, setCount] = useState(1);

  
  // this is for useCallback
  // const [name, setName] = useState("Hari");
  // const changName = useCallback(() => {
  //   setName(prompt("Enter name:"));
  // }, [name]);


  // // const changName = ()=>{
  // //   setName("Hari Prasad Dhaker")
  // // }

  return (
    <>
    <CountOne/>
      {/* <Count name={name} changName={changName} />  to understand use of useCallback*/}

      {/* <ReduceCounter/> */}

      {/* <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button> */}
      {/* <InputREF /> */}
{/* 
      <counterContext.Provider value={{ count, setCount }}>
        <Button />
        <Fivemul />
      </counterContext.Provider> */}
    </>
  );
}

export default App;
