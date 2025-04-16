import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newList = [...todoList, task.trim()].sort();
      setTodoList(newList);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList.sort());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {todoList.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;