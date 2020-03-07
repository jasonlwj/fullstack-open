import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Hello = (props) => {
	return (
		<div>
			<p>привет {props.name}, тебе {props.age} лет</p>
		</div>
	)
}

const Footer = () => {
	return (
		<div>
			<p>
				<span>greeting app created by </span>
				<a href="https://github.com/mluukkai">mluukkai</a>
			</p>
		</div>
	)
}

const App = () => {
	return (
		<div className="header">
			<h1>Följ ljuset</h1>
			<Hello name="Maya" age={20 + 10} />
			<Footer />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
