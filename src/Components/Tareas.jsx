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
        updatedTasks[editIndex] = {
          ...updatedTasks[editIndex],
          text: task,
        };
        setTasks(updatedTasks);
        setEditMode(false);
        setEditIndex(null);
      } else {
        setTasks([...tasks, { text: task, completed: false }]);
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
    setTask(tasks[index].text);
  };

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      completed: !updatedTasks[index].completed,
    };
    setTasks(updatedTasks);
  };

  return {
    task,
    tasks,
    editMode,
    handleChange,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleCheckboxChange,
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
    handleCheckboxChange,
  } = useTaskManager();

  const pendingTasksCount = tasks.filter((task) => !task.completed).length;
  const completedTasksCount = tasks.filter((task) => task.completed).length;

  return (
    <div className='container'>
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <button className='agregar' type="submit">{editMode ? 'Actualizar tarea' : 'Agregar tarea'}</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button onClick={() => handleEdit(index)}>Editar</button>
            <button onClick={() => handleDelete(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>
        <p>Tareas pendientes: </p> {pendingTasksCount}
      </div>
      <div>
        <p>Tareas completadas: </p>{completedTasksCount}
      </div>
    </div>
  );
};

export default TodoList;
