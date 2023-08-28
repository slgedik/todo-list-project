import React from 'react';

function TodoList({ tasks, editingIndex, editedText, toggleTask, startEditing, saveEditedTask, cancelEditing, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {editingIndex === index ? (
            <>
              <input type='text' value={editedText} onChange={(e) => saveEditedTask(index, e.target.value)} />
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
  );
}

export default TodoList;
