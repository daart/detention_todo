import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { TodoItem } from './TodoItem';

@inject('store')
@observer
export class TodoList extends Component {
  render() {
    const { filtered } = this.props.store.todosStore;

    console.log('todos --> ', this.props.store.todosStore.todos);

    return (
      <div className="todoList">
        @Todo List
        {
          filtered.length > 0 ? (
            filtered.map(t => <TodoItem key={t.id} todo={t} />)
          ) : (<div>No Active tasks yet!</div>)
        }
      </div>
    )
  }
}
