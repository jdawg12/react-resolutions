import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList/todoList';
import TodoItem from './TodoItem/todoItem';
import AddToDO from './AddToDo/addToDo';


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
      /*can only have one div within this render, but it can have multiple sub-divs*/
      /*We can use JS within HTML here to pass on the reference of state. This is partly what makes React so pwoerful*/
      <div>
        <AddToDO addToDoFn={this.addToDo}></AddToDO>
      </div>
      );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos){
      const savedTodos = JSON.parse(todos); //we can only put in and retrieve strings from local Storage, so we need to do JSON.parse() to turn that string back into an object
      this.setState({ todos : savedTodos });//setState is asynch fn, so may execute next line before this line is done running
      console.log('Has todos', todos); //Can write strings and objects to the console
    } else {
        console.log('No todos', todos);
    }
  }
  
  addToDo = async (todo) => { //tells browser that this function is asynchronous, so we can use the 'await' function within
    await this.setState({todos : [...this.state.todos, todo]}); //the ... is the Spread Operator. Take everything in this.state.todos, combine with whatever is in todo, and save it to this.todos. This spread operator is also ASYNCHRONOUS so
    
  } 
}

export default App;
