import { useState } from 'react'
import './App.css'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const hideAnswer = isOpen ? "bg-amber-800 w-1/2 p-5 invisible" : "bg-amber-800 w-1/2 p-5"

  return (
    <>
      <section className='flex flex-col items-center justify-center w-screen h-screen'>
      <div className='flex justify-between gap-100 bg-amber-800 p-5'>
        <h4>Why is React great?</h4>
        {/* anonyme Funktion-->ändert jetzt den vorherigen State, so wie sie hier aufgerufen wird */}
        <button onClick={()=> setIsOpen(!isOpen)}></button>
      </div>
      <p className={hideAnswer}>Fast Learning Curve</p>
      </section>
    </>
  )
}

export default App
