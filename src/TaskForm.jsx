import React from 'react';

const TaskForm = ({ task, error, handleChange, handleSubmit, editMode }) => {
  const isNameValid = task.name.trim().length >= 3;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={task.name} onChange={handleChange} />
        {!isNameValid && <p className="error">El nombre de la tarea debe tener al menos 3 caracteres</p>}
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <textarea id="description" name="description" value={task.description} onChange={handleChange} />
      </div>
      <button type="submit" disabled={!isNameValid}>{editMode ? 'Actualizar tarea' : 'Agregar tarea'}</button>
    </form>
  );
};

export default TaskForm;