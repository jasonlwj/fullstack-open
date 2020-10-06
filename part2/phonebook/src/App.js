import React, { useState } from 'react'

const App = () => {
	const [ persons, setPersons ] = useState([
		{ name: 'Arto Hellas' }
	]) 
	const [ newName, setNewName ] = useState('')
	const [ newNumber, setNewNumber ] = useState('')

	const handleNewNameChange = event => setNewName(event.target.value)

	const handleNewNumberChange = event => setNewNumber(event.target.value)

	const addPerson = event => {
		event.preventDefault()

		for (const person of persons) {
			if (person.name === newName) {
				alert(`${newName} has already been added to the phonebook`)
				return
			}
		}

		const personToAdd = { 
			name: newName,
			number: newNumber
		}
		setPersons(persons.concat(personToAdd))
		setNewName('')
	}

	return (
		<div className="App">
			<div>
				<h2>Phonebook</h2>
				<form onSubmit={addPerson}>
					<div>
						name: <input value={newName} onChange={handleNewNameChange} />
					</div>
					<div>
						number: <input value={newNumber} onChange={handleNewNumberChange} />
					</div>
					<div>
						<button type="submit">add</button>
					</div>
				</form>
				<h2>Numbers</h2>
				<ul>
					{persons.map(person => 
						<li key={person.name}>{person.name}</li>
					)}
				</ul>
			</div>
		</div>
	)
}

export default App