import React from 'react'

const Header = ({ subject }) => {
  return (
      <h1>{subject.name}</h1>
  )
}

const Part = (props) => {
  return (
      <p>
          {props.part.name} {props.part.exercises}
      </p>
  )
}

const Content = ({ subject }) => {
  return (
      <div>
          {subject.parts.map((part) => <Part part={part} />)}
      </div>
  )
}


const Total = ({ subject }) => {
const total = subject.parts.reduce((total, part) => total + part.exercises, 0)
return (
   <h4>total of {total} exercises</h4>
		
	);
}

const Subject = ({ subject}) => {
  return (
      <div>
          <Header subject={subject} />
          <Content subject={subject} />
          <Total subject={subject} />
      </div>
  )
}
const App = () => {
  const subjects = [
    {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    
  ]

  return (
    <div>
      
      {subjects.map(subject=> <Subject subject={subject} />)}
    </div>
  )
}

export default App