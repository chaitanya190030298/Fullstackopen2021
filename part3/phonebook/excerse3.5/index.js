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
  app.post('/api/persons' , (request,response) => {
    const body = request.body
    if(body)
    {
      body.id = Math.floor(Math.random() *9999999)
      const person={
        "content":body.id,
        "number":body.name,
        "id":body.number
      }
      persons.concat(person)
      response.status(201).json(person)
  
    }
    else
    {
    return response.status(500).end();
  }
  
  })
  
  const PORT=3001
  app.listen(PORT)
  console.log(`Server is running on port ${PORT}`)
  

