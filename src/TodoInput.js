import React, { useState } from 'react';
import './App.css';

function TodoInput() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedText, setEditedText] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const startEditing = (index, text) => {
    setEditingIndex(index);
    setEditedText(text);
  };

  const cancelEditing = () => {
    setEditingIndex(-1);
    setEditedText('');
  };

  const saveEditedTask = (index) => {
    if (editedText.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[index].text = editedText;
      setTasks(updatedTasks);
      setEditingIndex(-1);
      setEditedText('');
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

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input type='text' value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                <button onClick={() => saveEditedTask(index)}>Save</button>
                <button onClick={cancelEditing}>Cancel</button>
              </>
            ) : (
              <>
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                <input type='checkbox' checked={task.completed} onChange={() => toggleTask(index)} />
                <button onClick={() => startEditing(index, task.text)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoInput;
