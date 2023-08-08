import React from 'react';
import { useColorMode, Button, IconButton, Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { DeleteIcon, EditIcon, AddIcon } from '@chakra-ui/icons'

const useTaskManager = () => {

  const { colorMode } = useColorMode();
  const backgroundColor = colorMode === 'light' ? 'white' : 'black';
  const textColor = colorMode === 'light' ? 'black' : 'white';

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

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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
    <Box p={4}>
    <div className='container'>
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
            <span className={task.completed ? '' : 'completed'}>{task.text}</span>
            <IconButton onClick={() => handleEdit(index)} aria-label='Search database' icon={<EditIcon />} />
            <IconButton onClick={() => handleDelete(index)} aria-label='Search database' icon={<DeleteIcon />} />
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
    </Box>
  );
};

export default TodoList;