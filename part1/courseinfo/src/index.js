import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Header = props => {
	console.log('Header props:', props)
	return (
		<h1>{props.course}</h1>
	)
}

const Content = props => {
	console.log('Content props:', props)
	return (
		<div>
			<Part />
			<Part />
			<Part />
		</div>
	)
}

const Part = props => {
	console.log('Part props:', props)
	return (
		<div>
		</div>
	)
}

const Total = () => (
	<></>
)

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	}
		
	return (
		<div>
			<Header course={course.name}	/>
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
