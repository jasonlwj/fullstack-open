import React, { useState } from 'react'

const App = () => {
	const [persons, setPersons] = useState([
		{ 
			name: 'Arto Hellas',
			number: '040-1234567',
		}
	])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')

	const addPerson = event => {
		event.preventDefault()

		const names = persons.map(person => person.name)

		if (names.includes(newName))
			alert(`${newName} is already added to the phonebook`)
		else
			setPersons([...persons, { 
				name: newName,
				number: newNumber,
			}])
			setNewName('')
	}

	const handleNameChange = event => {
		setNewName(event.target.value)
	}

	const handleNumberChange = event => {
		setNewNumber(event.target.value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					number: <input value={newNumber} onChange={handleNumberChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				{persons.map((person, i) => 
					<li key={i}>{person.name} {person.number}</li>
				)}
			</ul>
		</div>
	)
}

export default App
