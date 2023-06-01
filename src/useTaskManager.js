import { useState } from 'react';

const useTaskManager = () => {
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

  return {
    tasks,
    newTask,
    editMode,
    editedTask,
    handleInputChange,
    handleAddTask,
    handleEditTask,
    handleSaveTask,
    handleCancelEdit,
    handleDeleteTask,
  };
};

export default useTaskManager;
