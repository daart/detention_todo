import React, { Component, Fragment } from "react";

import { TodoForm } from './TodoForm';
import { VisibleTodos } from "./../containers/VisibleTodos";
import { Footer } from './Footer';

export const App = () => {
  return <div id="app">
      @App
      <TodoForm />
      <VisibleTodos />
      <Footer />
    </div>;
};
