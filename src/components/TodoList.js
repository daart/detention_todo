import React from 'react';
import { connect } from 'react-redux';

import { TodoItem } from './TodoItem';

export const TodoList = ({ todos }) => {
  return (
    <div className="todoList">
      {
        todos.length > 0 ? (
          <ul>
            {
              todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
              ))
            }
          </ul>
        ) : (<p>No Active Todos detected...</p>)
      }
    </div>
  )
};
