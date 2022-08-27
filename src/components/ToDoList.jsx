import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const ToDoList = () => {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function handleCreateNewTask() {
    const task = {
      id: Math.random(),
      title: newTask,
      description: newDescription,
      isComplet: false,
    };

    if (task.title === "" && task.description === "") {
      return;
    }

    setList([...list, task]);
    setNewTask("");
  }

  function handleRemoveTask(id) {
    const tasksFiltered = list.filter((task) => task.id !== id);
    setList(tasksFiltered);
  }

  function handleToggleTaskCompletion(id) {
    const newTasks = list.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task
    );
    setList(newTasks);
  }

  return (
    <>
      <div className="header">
        <h1 className="todo">ToDo list</h1>
      </div>
      <section className="list">
        <header>
          <h2 className="tarefa-title">NOVA TAREFA</h2>
          <div className="input-container">
            <p>Título</p>
            <input
              type="text"
              placeholder="Adicionar nova tarefa"
              onChange={(e) => {
                setNewTask(e.target.value);
              }}
              value={newTask}
            />
            <p>Descrição</p>
            <textarea
              onChange={(e) => {
                setNewDescription(e.target.value);
              }}
              value={newDescription}
            />
            <button
              type="submit"
              className="add-task"
              onClick={handleCreateNewTask}
            >
              ADICIONAR TAREFA
            </button>
          </div>
        </header>
      </section>
      <main>
        <div className="tarefas">
          <h2 className="tarefas-title">TAREFAS</h2>
        </div>
        <ul>
          {list.map((task) => (
            <li key={task.id}>
              <div className={task.isComplete ? "completed" : ""}>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                    readOnly
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>
              <button
                className="remove-task"
                type="button"
                onClick={() => handleRemoveTask(task.id)}
              >
                <FiTrash2 size={12} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default ToDoList;
