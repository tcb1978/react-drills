import React from 'react';

export const Todo = (props) => {
    return (<div>{props.toDos.map((element, index) => <h1 key={index}>{element}</h1>)}</div>)
}

export default Todo