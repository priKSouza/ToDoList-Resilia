import React from "react";
import { useState } from "react";

function ToDoList({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  return (
    <>
      <form className="list">
        <div className="header">
          <h1 className="todo">ToDo List</h1>
        </div>
        <div className="form">
          <div className="tarefa">
            <h2 className="tarefa-title">NOVA TAREFA</h2>
          </div>
          <div className="titulo">
            <p>Título</p>
            <input type="text" onChange={() => onChangeTitle} />
          </div>
          <div className="descricao">
            <p>Descrição</p>
            <textarea onChange={() => onChangeTitle} />
          </div>
          <button onClick={() => handleSubmit}>ADICIONAR TAREFA</button>
          {console.log(handleSubmit)}
        </div>
      </form>
    </>
  );
}

export default ToDoList;
