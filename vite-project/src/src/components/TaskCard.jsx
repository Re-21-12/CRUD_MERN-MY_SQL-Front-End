import React from "react";
//import { deleteTaskRequest } from "../api/tasks.api";
import { useTasks } from "../context/TaskProvider";
//se usa para navegagr a una direccion de la pagina
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone  } = useTasks();
  const hadleDone = async() =>{
   await  toggleTaskDone(task.id)
  }
  //funcion que nos ayuda a navegar a una direccion
  const navigate = useNavigate();
  /*   const handleDelete = async (id) => {
    try {
      await deleteTaskRequest(id);
    } catch (error) {
      console.error(error);
    } */
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✓" : "✖"}</span>
      <span>{task.createdAt}</span>
      {/**En lo de abajo usamos una funcion anonima que espera un parametro osea el boton que estamos presionando y busca la id con el task.id de el boton que se esta presionando esto es enviado a la parte de axios donde hace la consuta cono el request params.id y lo lanza a una funcion handle DELETE para ser ejecutada */}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
      <button onClick={()=>hadleDone(task.done)}>Toggle Task</button>
    </div>
  );
}

export default TaskCard;
