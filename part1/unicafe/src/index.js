import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({ handleClick, text }) => 
	<button onClick={handleClick}>
		{text}
	</button>

const Statistic = ({ text, value }) => 
	<tr>
		<td>{text}</td>
		<td>{value}</td>
	</tr>

const Statistics = ({ good, neutral, bad }) => {
	const getAll = () => good + neutral + bad
	const getAverage = () => good - bad
	const getPositive = () => Math.floor((good / getAll()) * 100)

	if (getAll() === 0)
		return (
			<div>
				<p>No feedback given</p>
			</div>
		)

	return (
		<table>
			<Statistic text={'good'} value={good} />
			<Statistic text={'neutral'} value={neutral} />
			<Statistic text={'bad'} value={bad} />
			<Statistic text={'all'} value={getAll()} />
			<Statistic text={'average'} value={getAverage()} />
			<Statistic text={'positive'} value={getPositive()} />
		</table>
	)
}

const App = () => {
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
			<Statistics 
				good={good}
				neutral={neutral}
				bad={bad}
			/>
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)