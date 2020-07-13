import React from 'react';
class AddToDo extends React.Component{

    constructor(){
        super();
        this.state = {
            todo : ''
        };
    }

    render(){
        return(
        <div className = 'addToDoContainer'>
            <form onSubmit={(e) => this.submitTodo(e)}>
                <input id='addTodoInput' onChange={(e) => this.updateInput(e)} type='text'></input> 
                <button type='submit'>Add Task</button>
                <button onClick={this.sayBonjour}>Clear</button>
            </form>
        </div>);
    }

    updateInput = (e) => {
        this.setState({todo : e.target.value})
        console.log(e);
    }

    submitTodo = (e) => {
        console.log('submit', this.state.todo);
        e.preventDefault(); //prevents an event's default action if it isn't explicitly handled
        this.props.addToDoFn(this.state.todo, false);
        document.getElementById('addTodoInput').value = '';
    }

    sayBonjour = () => {
        console.log('Clear To Do')

    }
}

export default  AddToDo;