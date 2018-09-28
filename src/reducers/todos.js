export const TODO_ADD = "TODO_ADD";
export const TODO_REMOVE = "TODO_REMOVE";
export const TODO_TOGGLE = "TODO_TOGGLE";

export const addTodo = (todo) => {
  return { type: TODO_ADD, payload: todo };
};

export const toggleTodo = (id) => {
  return {
    type: TODO_TOGGLE,
    payload: {
      id: id
    }
  };
};

export const removeTodo = (id) => {
  return {
    type: TODO_REMOVE,
    payload: {
      id: id
    }
  };
};

export const todos = (state = [], { type, payload }) => {
  switch(type) {
    case "TODO_ADD":
      return [...state, payload];
    case "TODO_REMOVE":
      return state.filter(t => t.id !== payload.id);
    case "TODO_TOGGLE":
      return state.map(t => (t.id === payload.id ? { ...t, completed: !t.completed } : t))
    default:
      return state;
  }
};
