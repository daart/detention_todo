import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

const defaultState = {
  inputValues: {
    todo: ""
  }
};

class Todo {
  id = Math.random().toString().slice(2, 12);

  completed = false;

  constructor(txt = "some todo txt") {
    this.txt = txt;
    this.completed = false;
  }

}

@inject('store')
@observer
export class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  submitHandler = (e) => {
    e.preventDefault();
    const { addTodo } = this.props.store.todosStore;

    if (this.state.inputValues.todo.length > 0) {
      addTodo(new Todo(this.state.inputValues.todo));
      this.claerForm();
    }
  };

  inputHandler = e => {
    e.preventDefault();

    const { name, value } = e.target;

    this.setState({
      inputValues: {
        [name]: value
      }
    });

  };

  claerForm = () => {
    this.setState({
      inputValues: defaultState.inputValues
    })
  }

  render() {
    console.log("zis props ==> ", this.props);

    return (
      <div id="form">
        <form action="" onSubmit={this.submitHandler}>
          <fieldset>
            <label htmlFor="todo">
              wtf needs to be done
              <input 
                type="text" 
                name="todo" 
                onChange={this.inputHandler} 
                value={this.state.inputValues.todo}
              />
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}
