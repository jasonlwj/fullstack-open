import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country, weatherInfo, handleWeatherInfoChange }) => {
	const api_key = process.env.REACT_APP_API_KEY

	useEffect(() => {
		axios
			.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
			.then(response => {
				handleWeatherInfoChange(response.data.current)
			})
	}, [country])

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
				<b>temperature:</b> {weatherInfo.temperature} Celsius<br />
				<img src={weatherInfo.weather_icons} height="100" alt="weather" />
			</div>
			<div>
				<b>wind:</b> {weatherInfo.wind_speed} mph direction {weatherInfo.wind_dir}
			</div>
		</div>
	)
}

const Results = ({ countries, countryShown, weatherInfo, handleCountryShownChange, handleWeatherInfoChange }) => {
	if (countries.length > 10)
		return <div>Too many matches, please specify another filter</div>
	
	if (countryShown)
		return <Country country={countryShown} weatherInfo={weatherInfo} handleWeatherInfoChange={handleWeatherInfoChange} />

	if (countries.length === 1)
		return <Country country={countries[0]} weatherInfo={weatherInfo} handleWeatherInfoChange={handleWeatherInfoChange}  />

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
	const [ weatherInfo, setWeatherInfo ] = useState({})

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

	const handleWeatherInfoChange = weatherInfo => {
		setWeatherInfo(weatherInfo)
	}

	const countriesToShow = results.filter(
		country => country.name.toLowerCase().includes(term.toLowerCase())
	)

	// render
	return (
		<div className="App">
			<div>
				find countries <input value={term} onChange={handleTermChange} />
				{
					(term)
					? <Results 
							countries={countriesToShow}
							countryShown={countryShown}
							weatherInfo={weatherInfo}
							handleCountryShownChange={handleCountryShownChange}
							handleWeatherInfoChange={handleWeatherInfoChange}
						/> 
					: <div></div>
				}
			</div>
		</div>
	)
}

export default App