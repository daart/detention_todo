import { observable, computed, action } from 'mobx';

class TodosStore {
  @observable todos = [];
  @observable visibilityFilter = "SHOW_ALL";
  
  @action.bound
  addTodo(todo) {
    this.todos.push(todo)
  }

  @action.bound
  setVisibilityFilter(filter) {
    this.visibilityFilter = filter;
  }
  
  @action.bound
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  @action.bound
  toggleTodo(id) {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo);
  }

  @computed
  get filtered() {
    let filter = this.visibilityFilter;

    switch(filter) {
      case "SHOW_ALL":
        return this.todos;
      case "SHOW_COMPLETED":
        return this.todos.filter(t => t.completed);
      case "SHOW_ACTIVE":
        return this.todos.filter(t => !t.completed);
      default:
        throw new Error("no list was found for that filter!");
    }
  }
}

export const todosStore = new TodosStore();
