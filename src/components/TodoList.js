import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      ))}
    </div>
  );
};

export default TodoList;

