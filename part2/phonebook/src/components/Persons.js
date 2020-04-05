import React from 'react'

const Persons = ({ personsToShow }) => {
	return (
		<ul>
			{personsToShow.map((person, i) => 
				<li key={i}>{person.name} {person.number}</li>
			)}
		</ul>
	)
}

export default Persons
