import React, { useState } from 'react'
import PhoneBook from './components/PhoneBook'


const App = (props) => {
  const [ Persons, setPersons] = useState(props.Persons) 
  const [ newName, setNewName ] = useState('')


const addName=(event)=>{
  event.preventDefault()
  const nameObject={
    name:newName,
    number:Persons.length+1
  }
  setPersons(Persons.concat(nameObject))
  setNewName('')
}
const handleChange=(event)=>{

  setNewName(event.target.value)
}
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
       {Persons.map(person=>
        <PhoneBook key={person.number} person={person} />
        )}
        </ul>
    </div>
  )

}

export default App