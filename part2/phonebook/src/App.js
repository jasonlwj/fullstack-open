import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'

const App = () => {
	// declare state
	const [ persons, setPersons ] = useState([]) 
	const [ newName, setNewName ] = useState('')
	const [ newNumber, setNewNumber ] = useState('')
	const [ filterValue, setFilterValue ] = useState('')

	// fetch data from server
	useEffect(() => {
		personService
			.getAll()
			.then(returnedPersons => setPersons(returnedPersons))
	}, [])

	// form state event handlers
	const handleNewNameChange = event => setNewName(event.target.value)
	const handleNewNumberChange = event => setNewNumber(event.target.value)
	const handleFilterValueChange = event => setFilterValue(event.target.value)

	// create entry
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

		personService
			.create(personToAdd)
			.then(returnedPerson => {
				setPersons(persons.concat(returnedPerson))
				setNewName('')
				setNewNumber('')
			})
	}

	// delete entry
	const deletePerson = personToDelete => {
		if (window.confirm(`Delete ${personToDelete.name} ?`))
			console.log(`removing person with id ${personToDelete.id}`)
			personService
				.remove(personToDelete.id)
				.then(setPersons(persons.filter(person => person.id !== personToDelete.id)))
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
						<Person key={person.id} person={person} deletePerson={deletePerson} />
					)}
				</ul>
			</div>
		</div>
	)
}

export default App