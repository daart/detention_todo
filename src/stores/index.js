import { todosStore } from './todosStore';

class AppStore {
  constructor() {

    this.todosStore = todosStore;
  }
}

export const store = new AppStore();
