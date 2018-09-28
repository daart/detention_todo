import { connect } from 'react-redux';

import { TodoList } from './../components/TodoList';

export const getFilteredTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed);
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error("no such item found by this filter");
  }
}

const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos: getFilteredTodos(todos, visibilityFilter),

});

export const VisibleTodos = connect(mapStateToProps)(TodoList);
