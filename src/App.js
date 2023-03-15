import React, { useState } from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Finish homework', isDone: false },
    { id: 2, description: 'Go grocery shopping', isDone: false },
    { id: 3, description: 'Call mom', isDone: true },
  ]);
  const [filterDone, setFilterDone] = useState('all');

  const handleAddTask = (newTaskDescription) => {
    const newTask = {
      id: tasks.length + 1,
      description: newTaskDescription,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (taskId, editedTaskDescription, editedTaskIsDone) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          description: editedTaskDescription,
          isDone: editedTaskIsDone ?? task.isDone,
        };
      }
      return task;
    }));
  };

  const handleFilterChange = (newFilterDone) => {
    setFilterDone(newFilterDone);
  };

  return (
    <div className="App">
      <AddTask onAddTask={handleAddTask} />
      <ListTask tasks={tasks} filterDone={filterDone} onEditTask={handleEditTask} />
      <div>
        <label>
          <input type="radio" name="filter" value="all" checked={filterDone === 'all'} onChange={() => handleFilterChange('all')} />
          All
        </label>
        <label>
          <input type="radio" name="filter" value="done" checked={filterDone === 'done'} onChange={() => handleFilterChange('done')} />
          Done
        </label>
        <label>
          <input type="radio" name="filter" value="notDone" checked={filterDone === 'notDone'} onChange={() => handleFilterChange('notDone')} />
          Not Done
        </label>
      </div>
    </div>
  );
}

export default App;