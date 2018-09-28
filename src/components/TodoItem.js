import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo, removeTodo } from './../reducers/todos';

const Todo = ({ toggleTodo, removeTodo, todo }) => {
  const { txt, completed, id } = todo;
  console.log('tododododo ', todo);

  return (
    <li className="todoItem">
      <div>
        {txt}
        <button onClick={() => removeTodo(id)}>Remove</button>
        <button onClick={() => toggleTodo(id)}>Toggle</button>
      </div>
    </li>
  )
}

export const TodoItem = connect(null, { toggleTodo, removeTodo })(Todo);
