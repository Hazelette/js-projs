import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Take shower",
    "Walk Dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  function moveTaskUp(index) {}
  function moveTaskDown(index) {}

  return (
    <>
      <div className="todo-list">
        <h1>To-Do List</h1>

        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />

          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((tasks, index) => (
            <li key={index}>
              <span className="text">{tasks}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>

              <button className="move-button" onClick={() => moveTaskUp(index)}>
                ☝️
              </button>

              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
