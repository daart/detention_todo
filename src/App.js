import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

// ACTION TYPES
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
const SHOW_ALL = "SHOW_ALL";
const SHOW_COMPLETED = "SHOW_COMPLETED";
const SHOW_NOT_COMPLETED = "SHOW_NOT_COMPLETED";

// Action Creators
const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: {
      id: id
    }
  };
};

const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id: id
    }
  };
};

const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: {
      filter: filter
    }
  }
};

// reducers
export const todos = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [...state, payload];
    case "REMOVE_TODO":
      return state.filter(t => t.id !== payload.id);
    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id === payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};

export const visibilityFilter = (state = SHOW_ALL, { type, payload }) => {
  switch(type) {
    case "SET_VISIBILITY_FILTER":
      return payload.filter
    default:
      return state
  }
};

class Todo {
  id = Math.random()
    .toString()
    .substr(2, 10);

  constructor(txt) {
    this.completed = false;
    this.txt = txt;
  }
}

const TodoList = ({ todos = [] }) => {
  return (
    <div className="list">
      @TodoList
      <ul>
        {todos.map(todo => (
          <ConnectedTodoItem todo={todo} key={ todo.id }/>
        ))}
      </ul>
    </div>
  );
};

const TodoItem = ({ toggleTodo, removeTodo, todo = { txt: '' } }) => {
  const { id, txt } = todo;
  
  return (
    <li>
      <div>@TodoItem</div>
      <div>{txt}</div>
      <div className="controls">
        <button onClick={() => removeTodo(id)}>Remove</button>
        <button onClick={() => toggleTodo(id)}>Toggle</button>
      </div>
    </li>
  );
};

class TodoForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inputValue: ""
    };
  }

  inputHandler = e => {
    e.preventDefault();

    const { name, value } = e.target;

    this.setState({
      inputValue: value
    });
  };

  submitHandler = e => {
    e.preventDefault();

    const { inputValue } = this.state;
    const { addTodo } = this.props;
    
    if (inputValue !== "") {
      addTodo(new Todo(inputValue));
      this.clearForm();
    }
  };

  clearForm = () => {
    this.setState({
      inputValue: ""
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div id="form">
        <form onSubmit={this.submitHandler}>
          <fieldset>
            <label htmlFor="todo">
              wtf do you want ?{" "}
              <input
                type="text"
                onChange={this.inputHandler}
                value={inputValue}
                name="todo"
              />
            </label>
            <button>Add Todo</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

let summaryMapStateToProps = ({ todos }) => {
  let completed = todos.filter(t => t.completed).length;
  let total = todos.length;

  return { todos, completed, total };
}

const Summary = ({ todos, completed, total }) => {
  return (
    <div className="summary">
      Done: {completed} / {total}
    </div>
  )
};

let controlsMapStateToProps = ({ visibilityFilter }) => ({ visibilityFilter });

const Controls = ({ visibilityFilter, setVisibilityFilter }) => {
  const filterTypes = [SHOW_ALL, SHOW_COMPLETED, SHOW_NOT_COMPLETED];

  return (
    <div className="controls">
      {
        filterTypes.map(filter => {
          return (
            
            <label htmlFor={filter} key={filter}>
              {filter}
              <input 
                type="checkbox" 
                name={filter} 
                checked={filter === visibilityFilter }
                onChange={() => setVisibilityFilter(filter)} />
            </label>
          )
        })
      }
    </div>
  );
};

const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_NOT_COMPLETED":
      return todos.filter(t => !t.completed);
    default:
      console.log("Errora");
  }
};

let todoListMapStateToProps = ({ todos, visibilityFilter }) => ({
  todos: getVisibleTodos(todos, visibilityFilter),
  visibilityFilter
});

// Connected Components
const ConnectedTodoItem = connect(null, { toggleTodo, removeTodo })(TodoItem);
const ConnectedTodoList = connect(todoListMapStateToProps)(TodoList);
const ConnectedTodoForm = connect(null, { addTodo })(TodoForm);
const ConnectedSummary = connect(summaryMapStateToProps)(Summary);
const ConnectedControls = connect(controlsMapStateToProps, { setVisibilityFilter })(Controls);

function App() {
  return <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ConnectedTodoForm />
      <ConnectedTodoList />
      <ConnectedSummary />
      <ConnectedControls />
    </div>;
}

export default App;
