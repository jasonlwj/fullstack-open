import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({ handleClick, text }) => 
	<button onClick={handleClick}>
		{text}
	</button>

const App = () => {
	// save clicks of each button to own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const handleFeedback = rating => {
		if (rating === 'good')
			setGood(good + 1)
		else if (rating === 'neutral')
			setNeutral(neutral + 1)
		else
			setBad(bad + 1)
	}

	return(
		<div>
			<h1>give feedback</h1>
			<Button 
				handleClick={() => handleFeedback('good')} 
				text={'good'}
			/>
			<Button 
				handleClick={() => handleFeedback('neutral')} 
				text={'neutral'}
			/>
			<Button 
				handleClick={() => handleFeedback('bad')} 
				text={'bad'}
			/>
			<h1>statistics</h1>
			<p>
				good {good}<br />
				neutral {neutral}<br />
				bad {bad}<br />
			</p>
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)