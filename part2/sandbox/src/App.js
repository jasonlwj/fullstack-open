import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'


const App = () => {
	const [notes, setNotes] = useState([])
	const [newNote, setNewNote] = useState('a new note...')
	const [showAll, setShowAll] = useState(true) // false: only show important notes
	
	useEffect(() => {
		console.log('effect')
		axios
			.get('http://localhost:3001/notes')
			.then(response => {
				console.log('promise fulfilled')
				setNotes(response.data)
			})
	}, [])

	console.log('render ', notes.length, ' notes')

	const notesToShow = showAll 
		? notes 
		: notes.filter(note => note.important)

	const addNote = event => {
		event.preventDefault()
		const noteToAdd = {
			id: notes.length + 1,
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5
		}

		setNotes(notes.concat(noteToAdd))
		setNewNote('a new note...')
	}

	const handleToggleShowAll = () => {
		setShowAll(!showAll)
	}

	const handleNewNoteChange = event => {
		setNewNote(event.target.value)
	}

	return (
		<div className="App">
			<div>
				<h1>Notes</h1>
				<button onClick={handleToggleShowAll}>
					show {showAll ? 'important' : 'all'}
				</button>
				<ul>
					{notesToShow.map(note => 
						<Note key={note.id} note={note} />
					)}
				</ul>
				<form onSubmit={addNote}>
					<input value={newNote} onChange={handleNewNoteChange} />
					<button type="submit">save</button>
				</form>
			</div>
		</div>
	)
}

export default App
