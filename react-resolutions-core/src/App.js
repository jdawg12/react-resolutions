import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList/todoList';
import TodoItem from './TodoItem/todoItem';


class App extends React.Component {

  render () {
    return(
      <div>
          <TodoItem></TodoItem>
          <TodoList></TodoList>
      </div>
      );
  }
}

export default App;
