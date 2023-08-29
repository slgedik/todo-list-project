import React, { useState } from 'react';
import './App.css';

function TodoInput({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedText, setEditedText] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  return (
    <div className='App'>
      <h1>TodoInput</h1>
      <div class='border border-secondary todoInput bg-primary d-flex flex-column justify-content-center align-items-center'>
        <input class='w-full' type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button type='button' className='btn btn-success w-full mt-2' onClick={addTask}>
          Add New Task
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
