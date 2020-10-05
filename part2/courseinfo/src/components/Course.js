import React from 'react'

// const App = () => {
// 	const course = {...}

// 	return (
// 		<div className="App">
// 			<Header course={course.name} />
// 			<Content parts={course.parts} />
// 			<Total parts={course.parts} />
// 		</div>
// 	)
// }

const Header = ({ name }) => (
	<div>
		<h1>{name}</h1>
	</div>
)

const Part = ({ name, exercises }) => (
	<div>
		<p>{name} {exercises}</p>
	</div>
)

const Content = ({ parts }) => (
	<div>
		{parts.map(part => (
			<Part key={part.id} name={part.name} exercises={part.exercises} />
		))}
	</div>
)

const Total = ({ parts }) => (
	<div>
		<p>{parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
	</div>
)

const Course = ({ course }) => {
	return (
		<div>
			<Header name={course.name} />
			<Content parts={course.parts} />
		</div>
	)
}

export default Course 
