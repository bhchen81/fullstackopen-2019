import React from "react";

const Header = ({ course }) => <h2>{course}</h2>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);

  return <h3>total of {total} exercises</h3>;
};

const Content = ({ parts }) => {
  const rows = () => parts.map(part => <Part key={part.id} part={part} />);

  return (
    <div>
      {rows()}
      <Total parts={parts} />
    </div>
  );
};

const Course = ({ course }) => (
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
  </>
);

export default Course;
