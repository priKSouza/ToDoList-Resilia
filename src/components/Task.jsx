import React from "react"

function Task ({ tasks }){
    return(
        <div className="tarefas">
            <div className="tarefas-title">
                <h2>TAREFAS</h2>
            </div>
            <div className="tasks">
                {tasks.map(task => (
                    <List key={task.id} task={task}/>
                ))}
            </div>
        </div>
    )
}

export default Task