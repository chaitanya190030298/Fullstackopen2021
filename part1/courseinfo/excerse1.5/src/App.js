import React from 'react'
const Header = (props) => (
  <h1>
      { props.title }
  </h1>
)

const Part = (props) => (
  <p>
      {props.part} {props.exercises}
  </p>
)

const Content = (props) => (
  <div>
      <Part part = {props.parts[0].name} excercise = {props.parts[0].exercises} />
      <Part part = {props.parts[1].name} excercise = {props.parts[1].exercises} />
      <Part part = {props.parts[2].name} excercise = {props.parts[2].exercises} />
  </div>
);

const Total = (props) => (
  <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  </div>
)

const App = () => {
const course = {
    name: 'Half Stack application development',
    parts: [
          { 
          name:'Fundamentals of React',
          exercises:10
          },
          {
          name: 'Using props to pass data',
          exercises: 7
          },
          {
          name: 'State of a component',
          exercises: 14
          }
      ]
  };
return (
  <div>
    < Header title = {course.name} />
    < Content parts = {course.parts} />
    < Total parts = {course.parts} />
  </div>
)
}


export default App;
