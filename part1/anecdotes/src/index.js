import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({ onClick, text }) => {
	return (
		<button onClick={onClick}>
			{text}
		</button>
	)
}

const App = ({ anecdotes }) => {
	const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState({
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0
	})

	const getTopAnecdoteIndex = () => {
		let topAnecdoteIndex = 0

		for (let index in votes) {
			topAnecdoteIndex = (votes[index] > votes[topAnecdoteIndex]) ? index : topAnecdoteIndex
		}

		return topAnecdoteIndex
	}

	const handleNextAnecdote = () => {
		const randomInt = max => Math.floor(Math.random() * Math.floor(max))
		setSelected(randomInt(anecdotes.length))
	}

	const handleVote = () => {
		const newVotes = { ...votes }
		newVotes[selected]++
		setVotes(newVotes)
		console.log(getTopAnecdoteIndex())
	}

	return (
		<div className="App">
			<h1>Anecdote of the day</h1>
			{anecdotes[selected]}<br />
			has {votes[selected]} votes
			<div>
				<Button onClick={handleNextAnecdote} text='next anecdote' />
				<Button onClick={handleVote} text='vote' />
			</div>
			<h1>Anecdote with most votes</h1>
			{anecdotes[getTopAnecdoteIndex()]} <br />
			has {votes[getTopAnecdoteIndex()]} votes
		</div>
	)
}

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
	<App anecdotes={anecdotes} />,
	document.getElementById('root')
)
