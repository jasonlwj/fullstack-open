import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({ handleClick, text }) => {
	return (
		<button onClick={handleClick}>{text}</button>
	)
}

const App = () => {
	// save clicks of each button to own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const handleGood = () => setGood(good + 1)
	const handleNeutral = () => setNeutral(neutral + 1)
	const handleBad = () => setBad(bad + 1)

	const sum = good + neutral + bad
	const average = good * 1 + bad * -1
	const positive = (sum !== 0) ? good * 100 / sum : 0

	return (
		<div className="App">
			<h1>give feedback</h1>
			<div>
				<Button handleClick={handleGood} text='good' />
				<Button handleClick={handleNeutral} text='neutral' />
				<Button handleClick={handleBad} text='bad' />
			</div>
			<h1>statistics</h1>
			<div>
				good {good} <br /> {/* haha line break go <br /> */}
				neutral {neutral} <br />
				bad {bad} <br />
				average {average} <br />
				positive {positive} %
			</div>
		</div>
	)
}

ReactDOM.render(<App />, 
	document.getElementById('root')
)