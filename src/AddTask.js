import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTaskClick = () => {
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={handleNewTaskChange} />
      <button onClick={handleAddTaskClick}>Add Task</button>
    </div>
  );
}

export default AddTask;