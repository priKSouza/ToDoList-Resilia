import React from "react";
import { useState } from "react";
import Task from "./components/Task";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTasks(taskTitle, taskDescription) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        description: taskDescription,
        isComplited: false,
      },
    ]);
  }

  return (
    <div className="App">
      <ToDoList onAddTask={addTasks}/>
      <Task tasks={tasks}/>
    </div>
  );
}

export default App;
