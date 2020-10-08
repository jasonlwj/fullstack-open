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
			<h2>Weather in {country.capital}</h2>
			<div>
				<b>temperature: </b>
				poop
			</div>
			<div>
				<b>wind: </b>
			</div>
		</div>
	)
}

const Results = ({ countries, countryShown, handleCountryShownChange }) => {
	if (countries.length > 10)
		return <div>Too many matches, please specify another filter</div>
	
	if (countryShown)
		return <Country country={countryShown} />

	if (countries.length === 1)
		return <Country country={countries[0]} />

	if (countries.length > 1)
		return (
			<div>
				{countries.map(country => 
					<div key={country.alpha3Code}>
						{country.name + ' '} 
						<button onClick={() => handleCountryShownChange(country)}>show</button>
					</div>
				)}
			</div>
		)

	return (
		<div>No results found</div>
	)
}

const App = () => {
	// declare state
	const [ term, setTerm ] = useState('')
	const [ results, setResults ] = useState([])
	const [ countryShown, setCountryShown ] = useState('')

	// fetch data from api
	useEffect(() => {
		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(response => setResults(response.data))
	}, [])

	// form state event handlers
	const handleTermChange = event => {
		setTerm(event.target.value)
		setCountryShown('')
	}

	const handleCountryShownChange = country => {
		setCountryShown(country)
	}

	const countriesToShow = results.filter(
		country => country.name.toLowerCase().includes(term.toLowerCase())
	)

	// render
	return (
		<div className="App">
			<small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small><br />
			<div>
				find countries <input value={term} onChange={handleTermChange} />
				{
					(term)
					? <Results countries={countriesToShow} countryShown={countryShown} handleCountryShownChange={handleCountryShownChange} /> 
					: <div></div>
				}
			</div>
		</div>
	)
}

export default App