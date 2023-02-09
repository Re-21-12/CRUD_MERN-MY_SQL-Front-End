import React from "react";
import { useState, createContext, useContext } from "react";
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from "../api/tasks.api";
import { TaskContext } from "./TaskContext";
//export const TaskContext = createContext();

//hooks para ahorrar tiempo en importacion
//export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks should stay in TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  //contexto primero se guaurdan variables en el segundo el estado
  const [tasks, setTasks] = useState([]);

  //por que es async creamos una funcion para que genere la consulta y esta se cargue al cargar la pagina
  async function loadTasks() {
    const response = await getTasksRequest();
    //guardamos todo el arreglo de tareas dentro de nuestra variable de tasks
    setTasks(response.data);
  }
  //arreglar FIX!!!!!
  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      //si el id de task no es igual al id que se le esta pasando
      //console.log(response)
      setTasks(tasks.filter((task) => task.id  !== id));
      useEffect(()=>{
        setTasks([...tasks])
        loadTasks()
      },[])
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      //setTasks([...tasks, response.data])
      console.log(response);
      //actions.resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, newFields) => {
    try {
      const response = await updateTaskRequest(id, newFields);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTaskDone = async (id) =>{
    try{
      const taskFound = tasks.find((task)=> task.id == id)
      await toggleTaskDoneRequest(id, taskFound.done == 0 ? true : false)
      // paciencia
      // por cada tarea se recorre y busca el id si lo encuentra cambia el done a 0 o 1 si es 0 lo cambia a 1 si es 1 lo cambia a 0 si no lo va a mantener igual
      tasks.map(task => task.id == id ? task.done = task.done == 0 ? 1 : 0 : task.done)
      setTasks([...tasks])

    }catch(error){
      console.error(error)
    }
  }
  return (
    <TaskContext.Provider
      value={{ tasks, loadTasks, deleteTask, createTask, getTask, updateTask, toggleTaskDone }}
    >
      {children}
    </TaskContext.Provider>
  );
};
