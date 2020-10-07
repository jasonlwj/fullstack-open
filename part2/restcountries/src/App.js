import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
	return (
		<div>
			<h1>{country.name}</h1>
			<div>capital {country.capital}</div>
			<div>population {country.population}</div>
			<h2>languages</h2>
			<ul>
				{country.languages.map(language =>
					<li key={language.iso639_1}>{language.name}</li>	
				)}
			</ul>
			<img src={country.flag} height="200" alt="flag" />
		</div>
	)
}

const CountryList = ({ countries }) => {
	if (countries.length > 10)
		return <div>Too many matches, please specify another filter</div>

	if (countries.length > 1)
		return (
			<div>
				{countries.map(country => <div key={country.alpha3Code}>{country.name}</div>)}
			</div>
		)

	if (countries.length === 1)
		return <Country country={countries[0]} />

	return <div></div>
}

const App = () => {
	// declare state
	const [ term, setTerm ] = useState('')
	const [ results, setResults ] = useState([])

	// fetch data from api
	// GET from https://restcountries.eu/rest/v2/name/{name}
	useEffect(() => {
		if (term)
			axios
				.get(`https://restcountries.eu/rest/v2/name/${term}`)
				.then(response => {
					setResults(response.data)
				})
				.catch(error => console.log('Country not found'))
	}, [term])

	// form state event handlers
	const handleTermChange = event => {
		setTerm(event.target.value)
	}

	// render
	return (
		<div className="App">
			<div>
				find countries <input value={term} onChange={handleTermChange} />
				<CountryList countries={results} />
			</div>
		</div>
	)
}

export default App