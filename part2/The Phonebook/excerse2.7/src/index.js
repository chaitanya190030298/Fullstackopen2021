import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const Persons=[

    {
      number: 1,
      name: 'Arto Hella',
 
    },
    {
      number: 2,
      name: 'Grace hopper',
 
    }    


]

ReactDOM.render(
    <App Persons={Persons}/>,
  document.getElementById('root')
);
