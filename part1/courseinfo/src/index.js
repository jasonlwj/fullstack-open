import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Header = props => {
	console.log('Header props:')
	console.log(props)
	return (
		<h1>{props.course}</h1>
	)
}

const Content = () => (
	<div>
		<Part />
		<Part />
		<Part />
	</div>
)

const Part = props => {
	return (
		<></>
	)
}

const Total = () => (
	<></>
)

const App = () => {
	const course = 'Half Stack application development'
	const part1 = {
		name: 'Fundamentals of React',
		exercises: 10
	}
	const part2 = {
		name: 'Using props to pass data',
		exercises: 7
	}
	const part3 = {
		name: 'State of a component',
		exercises: 14
	}
  
	return (
		<div>
			<Header course={course}	/>
			<Content />
			<Total />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
