const Header = (props) => {
    return(
      <h1>{props.course}</h1>
    )
}

const Part = (props) => {
  return(
    <p>{props.name} {props.number}</p>
  )
}

const Content = (props) => {
  
  return(
    <div>
      <Part name={props[0].name} number={props[0].number}/>
      <Part name={props[1].name} number={props[1].number}/>
      <Part name={props[2].name} number={props[2].number}/>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const params = [
    { name: part1,  number: exercises1},
    { name: part2,  number: exercises2},
    { name: part3,  number: exercises3},
  ]

  return(
    <div>
      <Header course={course}/>
      <Content {...params}/>
    </div>
  )
  /*return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )*/
}

export default App