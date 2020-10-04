import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const History = ({ allClicks }) => {
	// if empty click history
	if (allClicks.length === 0 ) {
		return (
			<div>
				the app is used by pressing the buttons
			</div>
		)
	}

	// default
	return (
		<div>
			button press history: {allClicks.join(' ')}
		</div>
	)
}

const Button = ({ onClick, text }) => {
	return (
		<button onClick={onClick}>{text}</button>
	)
}

const App = () => {
	// declare the state
	const [left, setLeft] = useState(0)
	const [right, setRight] = useState(0)
	const [allClicks, setAll] = useState([])

	// onClick handlers
	const handleLeftClick = () => {
		setAll(allClicks.concat('L'))
		setLeft(left + 1)
	}

	const handleRightClick = () => {
		setAll(allClicks.concat('R'))
		setRight(right + 1)
	}

	// render to the screen
	return (
		<div className="App">
			<div>
				{left}
				<Button onClick={handleLeftClick} text='left' />
				<Button onClick={handleRightClick} text='right' />
				{right}
			</div>
			<History allClicks={allClicks} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
