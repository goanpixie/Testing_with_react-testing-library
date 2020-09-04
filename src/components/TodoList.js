import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div>
      <ul>
        {/* <li>Listen to podcast</li>
        <li>Talk to plants</li>
        <li>Learn React Testing Library</li> */}
        <TodoItem id="todo-1" title="Learn React.js" />
        <TodoItem id="todo-2" title="Learn Vue.js" />
        <TodoItem id="todo-3" title="Learn Laravel" />
      </ul>
    </div>
  );
};

export default TodoList;
