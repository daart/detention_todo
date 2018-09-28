import { connect } from 'react-redux';

import { addTodo } from './../reducers/todos';
import React, { Component } from 'react';

const prestineForm = {
  todo: ""
};

class Todo {
  id = Math.random().toString().slice(2, 10);
  
  txt;
  completed = false;

  constructor(txt = "new todo") {
    this.txt = txt;
  }
}

class TodoFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValues: prestineForm
    }

  }
  
  clearForm = () => {
    this.setState({ inputValues: prestineForm });
  }

  submitHandler = (e) => {
    e.preventDefault();
    const { inputValues } = this.state;
    const { addTodo } = this.props;
    
    if (inputValues.todo.length > 0) {
      addTodo(new Todo(inputValues.todo));
      this.clearForm();
    }
  }

  inputHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({
      inputValues: {
        ...this.state.inputValues,
        [name]: value
      }
    })
  }

  render() {
    return (
      <div className="todoForm">
        <form onSubmit={this.submitHandler}>
          <fieldset>
            <label htmlFor="todo">
              new task to do ?
              <input 
                name="todo"
                type="text" 
                onChange={ this.inputHandler }
                value={ this.state.inputValues.todo }
              />
            </label>
          </fieldset>
        </form>
      </div>
    )
  }
};

export const TodoForm = connect(null, { addTodo })(TodoFormBase);
