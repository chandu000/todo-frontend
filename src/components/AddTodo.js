import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = ({ todos, setTodos }) => {
  const [title, setTitle] = useState('');

  const addTodo = async () => {
    if (title.trim()) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/add/', { title });
        const newTodo = response.data;  // Get the newly added to-do item from the response
        setTodos([...todos, newTodo]);  // Add the new to-do to the current list
        setTitle('');  // Clear the input field
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
