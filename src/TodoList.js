import React from 'react';

function TodoList({ tasks, editingIndex, editedText, toggleTask, startEditing, saveEditedTask, cancelEditing, deleteTask }) {
  return (
    <div class='mt-4 '>
      {tasks.map((task, index) => (
        <div class='inputClass border border-secondary mt-2' key={index}>
          {editingIndex === index ? (
            <>
              <input type='text' value={editedText} onChange={(e) => saveEditedTask(index, e.target.value)} />
              <button onClick={() => saveEditedTask(index)}>Save</button>
              <button onClick={cancelEditing}>Cancel</button>
            </>
          ) : (
            <div class='d-flex'>
              <div class='mr-auto p-2'>
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
              </div>

              <div class='p-2'>
                <input type='checkbox' checked={task.completed} onChange={() => toggleTask(index)} />
                <button onClick={() => startEditing(index, task.text)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
