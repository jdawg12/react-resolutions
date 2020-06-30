import React from 'react';

class TodoList extends React.Component{

    render(){

        const { todos } = this.props; //same as writing const todos = this.props.todos; Allows you to pull out MULTIPLE props at the same time. Destructuring. 

        return( //here we are again, creating a parent container that will contain the javascript involved to iterate through the items in todos
            <div className='todoListContainer'>
                {

                }
            </div>
        );
    }
}

export default  TodoList;