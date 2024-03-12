import React,  { useState, useEffect, lazy } from 'react'
import useTodos from './hooks/useTodos'

function App() {
  const {todos, loading} = useTodos(5);

  if(loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  
  return (
    <>
      {todos.map((todo) => <TrackTodo todo={todo} />)}
    </>
  )
}

function TrackTodo({todo}) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  )
}

// class MyComponent extends React.Component {
//   componentDidMount() {
//     console.log("mounted")
//   }

//   componentWillUnmount() {
//     console.log("umnounted")
//   }

//   render() {
//     return <div>From inside the components</div>
//   }
// }

// function MyComponent() {
//   useEffect(() => {
//     console.error("components mounted")

//     return () => {
//       console.error("component unmounted")
//     };
//   }, []);

//   return (
//     <div>
//       From inside my component
//     </div>
//   )
// }

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

export default App
