const http = require('http')
const express = require('express')
const app = express()
let persons = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456",
     
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523",
      
    },
    {  
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345",
    },
    {  
        id: 4,
        name: "Marry Poppendick",
        number: "39-23-6423122",
    },
    {  
      id: 5,
      name: "haryy",
      number: "45-23-64231992",
  }
  ]
  app.get('/', (request, response) => {
    response.send('<h1>welcome</h1>')
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })
  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    response.json(person)
  })
  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    perosons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })
  

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)