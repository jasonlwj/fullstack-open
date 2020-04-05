import React, { useState } from 'react'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' }
	])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [filteredName, setFilteredName] = useState('')

	const addPerson = event => {
		event.preventDefault()

		const names = persons.map(person => person.name)

		if (names.includes(newName))
			alert(`${newName} is already added to the phonebook`)
		else
			setPersons([...persons, { 
				name: newName,
				number: newNumber
			}])
			setNewName('')
	}

	const handleNameChange = event => {
		setNewName(event.target.value)
	}

	const handleNumberChange = event => {
		setNewNumber(event.target.value)
	}

	const handleFilterChange = event => {
		setFilteredName(event.target.value)
	}

	const personsToShow = persons.filter(person => 
		person.name.toLowerCase().includes(filteredName.toLowerCase())
	)

	return (
		<div>
			<h2>Phonebook</h2>
			<p>filter shown with <input value={filteredName} onChange={handleFilterChange} /></p>
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
				{personsToShow.map((person, i) => 
					<li key={i}>{person.name} {person.number}</li>
				)}
			</ul>
		</div>
	)
}

export default App
