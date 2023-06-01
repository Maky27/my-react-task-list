import React from 'react';

const useTaskManager = () => {
  const [task, setTask] = React.useState('');
  const [tasks, setTasks] = React.useState([]);
  const [editMode, setEditMode] = React.useState(false);
  const [editIndex, setEditIndex] = React.useState(null);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      if (editMode) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditMode(false);
        setEditIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
      setTask('');
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
    <div>
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <button type="submit">{editMode ? 'Actualizar tarea' : 'Agregar tarea'}</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEdit(index)}>Editar</button>
            <button onClick={() => handleDelete(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;