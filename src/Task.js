import React, { useState } from 'react';

function Task({ task, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.description);

  const handleEditTaskChange = (event) => {
    setEditedTask(event.target.value);
  };

  const handleEditTaskClick = () => {
    setIsEditing(true);
  };

  const handleCancelEditClick = () => {
    setIsEditing(false);
    setEditedTask(task.description);
  };

  const handleSaveEditClick = () => {
    onEditTask(task.id, editedTask);
    setIsEditing(false);
  };

  const handleDoneCheckChange = (event) => {
    onEditTask(task.id, editedTask, event.target.checked);
  };

  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={handleDoneCheckChange} />
      {isEditing
        ? (
          <>
            <input type="text" value={editedTask} onChange={handleEditTaskChange} />
            <button onClick={handleSaveEditClick}>Save</button>
            <button onClick={handleCancelEditClick}>Cancel</button>
          </>
        )
        : (
          <>
            <span>{task.description}</span>
            <button onClick={handleEditTaskClick}>Edit</button>
          </>
        )
      }
    </div>
  );
}

export default Task;