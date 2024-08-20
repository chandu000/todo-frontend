import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const toggleComplete = () => {
    updateTodo(todo.id, { title: todo.title, completed: !todo.completed });
  };

  const handleUpdate = () => {
    updateTodo(todo.id, { title: newTitle, completed: todo.completed });
    setIsEditing(false); // Exit edit mode after updating
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.title}
        </span>
      )}
      <button
        onClick={toggleComplete}
        style={{
          backgroundColor: todo.completed ? 'Green' : 'transparent',
          color: 'black',
          border: '1px solid black', 
          marginRight: '10px',
        }}
      >
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      {isEditing ? (
        <button onClick={handleUpdate} style={{ marginRight: '10px' }}>
          Save
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)} style={{ marginRight: '10px', backgroundColor:'orange' }}>
          Edit
        </button>
      )}
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{
          backgroundColor: '#dc3545', 
          color: 'white', 
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
