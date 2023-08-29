import React from 'react';

function TodoMenu({ filterTasks }) {
  return (
    <div className='todo-menu'>
      <button class='btn btn-success ' onClick={() => filterTasks('All')}>
        All
      </button>
      <button class='btn btn-success' onClick={() => filterTasks('Done')}>
        Done
      </button>
      <button class='btn btn-success' onClick={() => filterTasks('Todo')}>
        Todo
      </button>
    </div>
  );
}

export default TodoMenu;
