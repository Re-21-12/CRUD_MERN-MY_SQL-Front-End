//nos sirve para comunicar http de manera mas facil
import axios from "axios";

// CREA UNA NUEVA TAREA
//funcion para poder enviar datos
//aca lo recibe  del onSubmit y lo manda al backend con una consulta post como desde thunderclient
export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4000/tasks", task);

// PEDIR LAS TTAREAS SE GENERAN AUTOAMTICA MENTE
//trae los datos del arreglo de tareas haciendo una consulta del tipo get
export const getTasksRequest = async () =>
  await axios.get("http://localhost:4000/tasks");

// ELIMINAR
//hace una consulta con un parametro id donde usa en express el request params.id
export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4000/tasks/${id}`);

//ACTUALIZAR
// trae un solo dato del arreglo de tareas haciendo una consulta get
export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/tasks/${id}`);

// actualiza un solo dato que trajo el anterior
export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, newFields);

// CAMBIAR HECHA O NO
export const toggleTaskDoneRequest = async (id, done) =>
await axios.put(`http://localhost:4000/tasks/${id}`, {
   done,
});
