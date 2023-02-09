//en react una varibale es un useState
import { useEffect, useState, useContext, createContext } from "react";
import TaskCard from "../components/TaskCard.jsx";
import { getTaskRequest } from "../api/tasks.api";
import { useTasks } from "../context/TaskProvider.jsx";

function TasksPage() {
  // const [tasks, setTasks] = useState([]);
  const { tasks, loadTasks } = useTasks();
  useEffect(() => {
    loadTasks();
  }, []);

  //creamos una funcion que retorn el contenido principal
  function renderMain() {
    {
      if (tasks.length === 0) {
        return <h1 className="text-white font-bold ">No tasks to make!</h1>;
      }
      //funcion map para recorrer nuestro arreglo
      return tasks.map((task) => <TaskCard task={task} key={task.id} />);
    }
  }
  return (
    <div>
      <h1 className="text-white font-bold text-center text-7xl">Tasks</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
