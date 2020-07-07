import React from 'react';

class TodoList extends React.Component{

    render(){

        const { todos } = this.props; //same as writing const todos = this.props.todos; Allows you to pull out MULTIPLE props at the same time. Destructuring. 

        return( //here we are again, creating a parent container that will contain the javascript involved to iterate through the items in todos
            <div className='todoListContainer'>
                {
                    todos.map((_todo, _index) => {
                        return(
                            <div key={_index}>{_todo}</div> //adding the index here in div opening is important
                        )
                    }) //creates a new array populated with the results of calling a provided function on every element in the calling array

                }
            </div>
        );
    }
}

export default  TodoList;