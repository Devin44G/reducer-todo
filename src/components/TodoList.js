import React, { useState, useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';
import './styles.css';

const TodoList = () => {

  // SETTING UP STATE
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState('');

  const changeHandler = e => {
    setNewTodo(e.target.value);
  };

  const submitHandler = () => {
    setNewTodo('');
  }

  return(
    <section>
      {/* TODOS TITLE */}
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h2 style={{marginRight:'10px'}}>Todos:</h2>
        <input
          style={{height:'20px'}}
          type="text"
          placeholder="Add Todo"
          value={newTodo}
          onChange={changeHandler}
        />
        <button
          style={{height:'26px'}}
          onClick={() => {
            dispatch({ type: 'ADD_TODO', payload: newTodo });
            submitHandler();
          }}>
          ADD
        </button>
        <button
          style={{height:'26px'}}
          onClick={() => {
            dispatch({ type: 'CLEAR_TODOS' });
          }}>
          CLEAR COMPLETED
        </button>
      </div>
      {/* LIST OF TODOS */}
      {state.todos.map( todo => {
        return(
          <h3
            className={(todo.completed === false) ? 'todo' : 'todo completed'}
            key={todo.id}
            onClick={() => {
              todo.completed = !todo.completed;
              dispatch({ type: 'COMPLETE_TASK' });
            }}
          >
            {todo.item}</h3>
        );
      })}
    </section>
  );
}

export default TodoList;
