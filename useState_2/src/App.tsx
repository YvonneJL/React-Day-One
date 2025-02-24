import { useState } from 'react'
import './App.css'

function App() {

//useState Hooks  
//hier Variablen definieren, die verändert werden sollen und Anfangswert setzen ""
const [vorName, setVorName] = useState("");
const [nachName, setNachName] = useState("");
const [email, setEmail] = useState("");

//Funktionen, um Änderung zu handeln
//Funktion direkt in Variable speichern
//event als Parameter
// "Funktion" von oben ausführen mit neuem Wert (event.target.value)
const handleVorName = (event: React.ChangeEvent<HTMLInputElement>) => setVorName(event.target.value)
const handleNachName = (event: React.ChangeEvent<HTMLInputElement>) => setNachName(event.target.value)
const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)

//onChange, da Veränderung während tippen passieren soll
//Funktion von oben reinschreiben
  return (
    <>
    <section>
      <div>
      <input type="text" id="input-1" onChange={handleVorName}/>
      <input type="text" id="input-2" onChange={handleNachName}/>
      <input type="text" id="input-3" onChange={handleEmail}/>
      </div>
      <div>
        <p>Vorname: {vorName} </p>
        <p>Nachname: {nachName} </p>
        <p>Email: {email} </p>
      </div>
    </section>
    </>
  )
}

export default App
