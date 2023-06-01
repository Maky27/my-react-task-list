import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleEditTask = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };

  const handleSaveTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = editedTask;
    setTasks(updatedTasks);
    setEditMode(false);
    setEditIndex(null);
    setEditedTask('');
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditIndex(null);
    setEditedTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Lista de tareas</h2>
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Agregar tarea</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {index === editIndex && editMode ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button onClick={handleSaveTask}>Guardar</button>
                <button onClick={handleCancelEdit}>Cancelar</button>
              </>
            ) : (
              <>
                {task}
                <button onClick={() => handleEditTask(index)}>Editar</button>
                <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;