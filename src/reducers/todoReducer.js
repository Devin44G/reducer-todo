

// INITIAL STATE OF TODOS
export const initialState = {
  todos: [
    {
      item: 'Learn Stuff',
      completed: false,
      id: 28118728
    }
  ]
}

export const todoReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case 'COMPLETE_TASK':
      return {
        ...state,
      }
    default:
      return state;
  }
}
