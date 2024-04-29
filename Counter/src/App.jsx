import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(5)
  // yaha "useState" hook h ,, iske badle "counter" or "setcounter" variable mila hai jisme setcounter counter ki value ko update krega

  // let counter = 15

  const addValue = () => {
    // console.log("Clicked", counter);

    if(counter < 21){
      counter = counter + 1
      setCounter(counter)

    }

    

    /*setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1) */     // is code se 4 jayda value bdhega.
  }

  const removeValue = ()=>{

    if(counter > 0){

      setCounter(counter - 1)

    }

    
    
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />

      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
