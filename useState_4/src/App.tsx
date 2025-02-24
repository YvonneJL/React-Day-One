import { useState } from 'react'
import './App.css'

function App() {
//Counter initialisieren
const [count, setCount] = useState(0);


//unterschiedliche Funktionen für unterschiedliche Rechnungen
function add () {
  setCount(count + 1)
}
function substract () {
  setCount(count - 1)
}
function reset () {
  setCount(0)
}


  return (
    <>
      <section className='flex flex-col gap-5'>
        <div className='flex gap-10'>
          <button onClick={add}>+</button>
          <p>{count}</p>
          <button onClick={substract}>-</button>
        </div>
        <button onClick={reset}>Reset</button>
      </section>
    </>
  )
}

export default App
