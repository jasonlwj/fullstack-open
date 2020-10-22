const express = require('express')
const app = express()

let persons = [
	{
		"name": "Arto Hellas",
		"number": "040-123457",
		"id": 1
	},
	{
		"name": "Ada Lovelace",
		"number": "39-44-5323523",
		"id": 2
	},
	{
		"name": "Mary Poppendieck",
		"number": "39-23-6423122",
		"id": 4
	}
]

app.get('/api/persons', (req, res) => {
	res.json(persons)
})

app.get('/info', (req, res) => {
	res.send(`
		<div>Phonebook has info for ${persons.length} people</div>
		<div>${new Date()}</div>
	`)
})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server now running on port ${PORT}`)
})
