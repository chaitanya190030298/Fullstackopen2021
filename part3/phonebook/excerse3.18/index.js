require('dotenv').config()
const express=require('express')
const morgan = require('morgan')
const cors = require('cors')
const app=express()
app.use(express.static('build'))
app.use(cors())
app.use(express.json())
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body'));

1
require('dotenv').config()
2
const express=require('express')
3
const morgan = require('morgan')
4
const cors = require('cors')
5
const app=express()
6
app.use(express.static('build'))
7
app.use(cors())
8
app.use(express.json())
9
morgan.token('body', (req, res) => JSON.stringify(req.body));
10
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body'));
11
​
12
const Person=require('./models/person.js')
13
​
14
​
15
​
16
​
17
const errorHandler = (error, request, response, next) => {
18
  console.error(error.message)
19
​
20
  if (error.name === 'CastError') {
21
    return response.status(400).send({ error: 'malformatted id' })
22
  }
23
​
24
  next(error)
25
}
26
app.use(errorHandler)
27
​
28
app.get('/persons',(request,response)=>{
29
  Person.find({}).then(persons=>{
30
    response.json(persons)
31
  })
32
  .catch(error => {
33
    console.log(error)
34
    response.status(500).end()
35
  })
36
})
37
​
38
app.get('/info',(request,response)=>{
39
  const date=new Date()
40
  response.send(`<p>PhoneBook has info for ${Person.length+1} people</p>
41
                  <p>${date}</p>`)
42
})
43
​
44
app.get('/persons/:id',(request,response,next)=>{
45
  Person.findById(request.params.id)
46
  .then(person=>{
47
      person?response.json(person):
48
      response.status(404).send(`<h1>${response.statusCode} The requested resource was not found.</h1>`)
49
    })
50
    .catch(error => next(error)) 
51
})
52
app.delete('/persons/:id',(request,response)=>{
53
  const id=request.params.id
54
  const people=Person.findByIdAndDelete(id)
55
  .then(person=>{
56
      person?response.status(204).json(person):
57
      response.status(404).send(`<h1>${response.statusCode} The requested resource was not found.</h1>`)
58
    })
59
    .catch(error => next(error)) 

const Person=require('./models/person.js')




const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}
app.use(errorHandler)

app.get('/persons',(request,response)=>{
  Person.find({}).then(persons=>{
    response.json(persons)
  })
  .catch(error => {
    console.log(error)
    response.status(500).end()
  })
})

app.get('/info',(request,response)=>{
  const date=new Date()
  response.send(`<p>PhoneBook has info for ${Person.length+1} people</p>
                  <p>${date}</p>`)
})

app.get('/persons/:id',(request,response,next)=>{
  Person.findById(request.params.id)
  .then(person=>{
      person?response.json(person):
      response.status(404).send(`<h1>${response.statusCode} The requested resource was not found.</h1>`)
    })
    .catch(error => next(error)) 
})
app.delete('/persons/:id',(request,response)=>{
  const id=request.params.id
  const people=Person.findByIdAndDelete(id)
  .then(person=>{
      person?response.status(204).json(person):
      response.status(404).send(`<h1>${response.statusCode} The requested resource was not found.</h1>`)
    })
    .catch(error => next(error)) 
  })

app.put('/persons/:id', (request, response) => {
  const { name, number } = request.body

  const person = {
    name,
    number
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updated => {
      response.json(updated)
    })
    .catch(error => next(error))

})



app.post('/persons' , (request,response) => {
  const { name, number } = request.body

  if (!content || !number) {
    return response.status(400).json({ error: 'missing name or number' })
  }

  const person = new Person({
    name,
    number
  })

  person.save()
    .then(savedPerson => {
      response.json(savedPerson)
    })
    .catch(error => next(error))

})


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Database running on port ${PORT}`)
})
