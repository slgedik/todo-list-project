import React, { useState } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoMenu from './TodoMenu';
import TodoList from './TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedText, setEditedText] = useState('');

  const filterTasks = (filterType) => {
    setFilter(filterType);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') {
      return task.completed;
    } else if (filter === 'todo') {
      return !task.completed;
    } else {
      return true;
    }
  });

  return (
    <div className='App'>
      <div>
        <TodoInput tasks={tasks} setTasks={setTasks} />
        <TodoMenu filterTasks={filterTasks} />
      </div>

      <TodoList
        tasks={filteredTasks}
        editingIndex={editingIndex}
        editedText={editedText}
        toggleTask={(index) => {
          const updatedTasks = [...tasks];
          updatedTasks[index].completed = !updatedTasks[index].completed;
          setTasks(updatedTasks);
        }}
        startEditing={(index, text) => {
          setEditingIndex(index);
          setEditedText(text);
        }}
        saveEditedTask={(index, newText) => {
          if (newText.trim() !== '') {
            const updatedTasks = [...tasks];
            updatedTasks[index].text = newText;
            setTasks(updatedTasks);
            setEditingIndex(-1);
            setEditedText('');
          }
        }}
        cancelEditing={() => {
          setEditingIndex(-1);
          setEditedText('');
        }}
        deleteTask={(index) => {
          const updatedTasks = tasks.filter((_, i) => i !== index);
          setTasks(updatedTasks);
        }}
      />
    </div>
  );
}

export default App;
