import React from 'react'

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
		<p>{parts.reduce((total, part) => (
			total + part.exercises
		), 0)}</p>
	</div>
)

const Course = ({ course }) => {
	return (
		<div>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	)
}

export default Course 
