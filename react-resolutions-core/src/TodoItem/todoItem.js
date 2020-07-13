import React from 'react';

class TodoItem extends React.Component{

    render(){

        const { todo } = this.props;

    return(<div onClick={this.toggleTodo}>{todo.text}</div>
        );
    }

    toggleTodo = () => {
        this.props.updateTodoFn(this.props.todo);
    }

    
}

export default  TodoItem;