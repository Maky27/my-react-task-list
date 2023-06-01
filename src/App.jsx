import React from 'react';
import TaskForm from './TaskForm';

const useTaskManager = () => {
  const [task, setTask] = React.useState({ name: '', description: '' });
  const [tasks, setTasks] = React.useState([]);
  const [editMode, setEditMode] = React.useState(false);
  const [editIndex, setEditIndex] = React.useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.name.trim() !== '' && task.description.trim() !== '') {
      if (editMode) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditMode(false);
        setEditIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
      setTask({ name: '', description: '' });
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setTask(tasks[index]);
  };

  return {
    task,
    tasks,
    editMode,
    handleChange,
    handleSubmit,
    handleDelete,
    handleEdit,
  };
};

const TodoList = () => {
  const {
    task,
    tasks,
    editMode,
    handleChange,
    handleSubmit,
    handleDelete,
    handleEdit,
  } = useTaskManager();

  return (
    <div className='container'>
      <h1>Lista de Tareas</h1>
      <TaskForm
        task={task}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editMode={editMode}
      />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <button onClick={() => handleEdit(index)}>Editar</button>
            <button onClick={() => handleDelete(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
