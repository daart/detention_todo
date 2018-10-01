import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject("store")
@observer
export class TodoItem extends Component {
  render() {
    const { txt, id, completed } = this.props.todo;
    const { removeTodo, toggleTodo } = this.props.store.todosStore;

    return (
      <div className="todoItem">
        {txt}
        {" "}
        <button onClick={() => removeTodo(id)}>Remove</button>
        <button onClick={() => toggleTodo(id)}>Toggle</button>
      </div>
    )
  }
}
