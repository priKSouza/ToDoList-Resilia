import React from "react";
import { BsTrash } from "react-icons/bs";

function List({ task }) {
  return (
    <div>
      <input type="checkbox" className="check" />
      <p>{task.title}</p>
      <button>
        <BsTrash />
      </button>
    </div>
  );
}

export default List;
