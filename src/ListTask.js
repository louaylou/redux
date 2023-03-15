import React from 'react';
import Task from './Task';

function ListTask({ tasks, filterDone, onEditTask }) {
  const filteredTasks = filterDone === 'all'
    ? tasks
    : tasks.filter(task => task.isDone === (filterDone === 'done'));

  return (
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} onEditTask={onEditTask} />
      ))}
    </div>
  );
}

export default ListTask;