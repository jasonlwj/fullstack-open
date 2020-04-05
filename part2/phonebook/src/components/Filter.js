import React from 'react'

const Filter = ({ filteredName, handleFilterChange }) => {
	return (
		<p>
			filter shown with <input 
				value={filteredName} 
				onChange={handleFilterChange} 
			/>
		</p>
	)
}

export default Filter
