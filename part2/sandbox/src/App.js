import React, { useState } from 'react'
import Note from './components/Note'

const App = ({ initalNotes }) => {
	const [notes, setNotes] = useState(initalNotes)
	const [newNote, setNewNote] = useState('a new note...')
	const [showAll, setShowAll] = useState(true) // false: only show important notes

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
