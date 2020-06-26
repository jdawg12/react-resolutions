import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList/todoList';
import TodoItem from './TodoItem/todoItem';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos : [] /*State is an object that you're creating. We assign it the key todos with an empty array as value
                 Whenever state is updated, it will re-render everything in the render function with the updated state*/ 
    }
  }

  render () {
    return(
      <div>
          <TodoItem></TodoItem> {/*can only have one div within this render, but it can have multiple sub-divs*/}
          <TodoList></TodoList>
      </div>
      );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos){
      console.log('Has todos', todos) //Can write strings and objects to the console
    } else {
        console.log('No todos', todos);
    }
  } 
}

export default App;
