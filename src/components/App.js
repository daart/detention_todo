import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { inject, observer } from 'mobx-react';

import { TodoForm } from './TodoForm';
import { Controls } from './Controls';
import { TodoList } from './TodoList';

@inject('store')
@observer
export class App extends Component {
  render() {
    console.log(this.props);

    return (
      <div id="app">
        <DevTools />
        @App Comp!

        <TodoForm />
        <TodoList />
        <Controls />

      </div>
    );
  }
};
