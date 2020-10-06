import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'

const App = () => {
	// declare state
	const [ persons, setPersons ] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' }
	]) 
	const [ newName, setNewName ] = useState('')
	const [ newNumber, setNewNumber ] = useState('')
	const [ filterValue, setFilterValue ] = useState('')

	// form state event handlers
	const handleNewNameChange = event => setNewName(event.target.value)

	const handleNewNumberChange = event => setNewNumber(event.target.value)

	const handleFilterValueChange = event => setFilterValue(event.target.value)

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

	const personsToShow = persons.filter(person => 
		person.name.toLowerCase().includes(filterValue.toLowerCase())
	)

	// render
	return (
		<div className="App">
			<div>
				<h2>Phonebook</h2>
				<Filter 
					filterValue={filterValue}
					handleFilterValueChange={handleFilterValueChange}
				/>
				<h2>Add a new</h2>
				<PersonForm 
					addPerson={addPerson}
					newName={newName}
					handleNewNameChange={handleNewNameChange}
					newNumber={newNumber}
					handleNewNumberChange={handleNewNumberChange} 
				/>
				<h2>Numbers</h2>
				<ul>
					{personsToShow.map(person => 
						<Person key={person.name} person={person} />
					)}
				</ul>
			</div>
		</div>
	)
}

export default App