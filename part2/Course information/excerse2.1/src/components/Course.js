import React from 'react';

const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>
    );
};

export default Course;

const Header = ({name}) => <h2>{name}</h2>;


const Content = ({parts}) => {


    return (
        <div>
            {parts.map(part => <Part part={part} key={part.id} />)}
        </div>
    );
};

const Part = ({part}) => <p>{part.name} {part.exercises}</p>;