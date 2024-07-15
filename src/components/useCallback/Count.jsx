import React from 'react'

const Count = ({name,changName}) => {
    console.log("hehe");
  return (
    <div>
      <h1>{name}</h1>
      i am a count

      <button onClick={changName}>chang name</button>
    </div>
  )
}

 export default React.memo(Count) //use memo to prevent unnassary rendering 
// export default Count
