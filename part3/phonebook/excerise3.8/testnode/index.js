const express=require('express')
const morgan = require('morgan')
const app=express()
app.use(express.json())
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body'));
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
  app.get('/api/persons',(request,response)=>{
    response.json(persons)
})

app.get('/api/persons/:id',(request,response)=>{
  const id=Number(request.params.id)
  const person=persons.find(person=>person.id===id)
  if(person)
  response.json(person)
  else
  response.status(404).send(`<h1>${response.statusCode} The requested resource was not found.</h1>`)
})

app.post('/api/persons' , (request,response) => {
  const body = request.body
  if(!body.name){
    response.status(400).send({ error: `${response.statusCode} <br/>name is missing` })
  }
  else if(!body.number){
    response.status(400).send({ error: `${response.statusCode} <br/>number is missing` })
  }
  else if(persons.find(person=>person.name===body.name)){
    response.status(409).send({ error: `${response.statusCode} <br/>name must be unique` })
  }    
  else if(body.name&&body.number)
  {
    body.id = Math.floor(Math.random() *9999999)
    const person={
      "id":body.id,
      "number":body.number,
      "name":body.naame
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