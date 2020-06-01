

// INITIAL STATE OF TODOS
export const initialState = {
  todos: [
    {
      item: 'Learn Advanced React',
      completed: false,
      id: 28118728
    },
    {
      item: 'Update Portfolio',
      completed: false,
      id: 28118729
    },
    {
      item: 'Apply for jobs',
      completed: false,
      id: 28118730
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
      };
    case 'CLEAR_TODOS':
      return {
        ...state,
        todos: [...state.todos.filter( todo => !todo.completed)]
      }
    default:
      return state;
  }
}
