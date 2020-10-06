import React, { useState } from 'react'

const App = () => {
	const [ persons, setPersons ] = useState([
		{ name: 'Arto Hellas' }
	]) 
	const [ newName, setNewName ] = useState('')

	const handleNewNameChange = event => {
		setNewName(event.target.value)
	}

	const addName = event => {
		event.preventDefault()

		for (const person of persons) {
			if (person.name === newName) {
				alert(`${newName} has already been added to the phonebook`)
				return
			}
		}

		const nameToAdd = { name: newName }
		setPersons(persons.concat(nameToAdd))
		setNewName('')
	}

	return (
		<div className="App">
			<div>
				<h2>Phonebook</h2>
				<form onSubmit={addName}>
					<div>
						name: <input value={newName} onChange={handleNewNameChange} />
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