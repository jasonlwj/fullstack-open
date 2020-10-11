import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
		console.log('useEffect go brrr')
		axios
			.get('http://localhost:3001/persons')
			.then(response => {
				setPersons(response.data)
			})
	}, [])

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

		axios
			.post('http://localhost:3001/persons', personToAdd)
			.then(response => {
				console.log(response.data)
				setPersons(persons.concat(response.data))
				setNewName('')
				setNewNumber('')
			})
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