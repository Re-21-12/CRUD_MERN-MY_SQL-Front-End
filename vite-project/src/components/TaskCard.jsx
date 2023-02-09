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
    <div className="bg-slate-500 rounded-lg p-2">
      <header className="flex justify-between">
      <h2 className="text-center text-base font-bold">{task.title}</h2>
      </header>
      <p className="text-sm">{task.description}</p>
      <span className="">{task.done == 1 ? "✓" : "✖"}</span>
      <span>{task.createdAt}</span>
      {/**En lo de abajo usamos una funcion anonima que espera un parametro osea el boton que estamos presionando y busca la id con el task.id de el boton que se esta presionando esto es enviado a la parte de axios donde hace la consuta cono el request params.id y lo lanza a una funcion handle DELETE para ser ejecutada */}
      <div className="flex gap-1 justify-end">
      <button className="bg-red-800 px-2 py-1 rounded-md text-white hover:bg-red-600 hover:text-lg" onClick={() => deleteTask(task.id)}>Delete</button>
      <button className="bg-green-800 px-2 py-1 rounded-md text-white hover:bg-green-600 hover:text-lg" onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
      <button className="bg-blue-800 px-2 py-1 rounded-md text-white hover:bg-blue-600 hover:text-lg"onClick={()=>hadleDone(task.done)}>Toggle Task</button>
      </div>
    </div>
  );
}

export default TaskCard;
