import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
			setNewNumber('')
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
			<Filter
				filteredName={filteredName}
				handleFilterChange={handleFilterChange} 
			/>
			<h3>Add a new</h3>
			<PersonForm 
				addPerson={addPerson}
				newName={newName}
				newNumber={newNumber}
				handleNameChange={handleNameChange}
				handleNumberChange={handleNumberChange}
			/>
			<h3>Numbers</h3>
			<Persons 
				personsToShow={personsToShow}
			/>
		</div>
	)
}

export default App
