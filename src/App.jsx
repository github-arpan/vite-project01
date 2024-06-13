import { useState } from 'react'




function App() {
  let [counter, setCounter] = useState(10)

  const addValue = () =>{
    if(counter<20){
      setCounter(counter+1)
    }
   
  }
  const removeValue = () =>{
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
  <div>
    <h1>counter : {counter}</h1>  
  <button
  onClick={addValue}
  >plus</button>
  <button
  onClick={removeValue}
  >minus</button>
  </div>
)
}

export default App
