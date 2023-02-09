//import React from "react";

//Nos permite crear formularios validos
import { Form, Formik } from "formik";
//import { createTaskRequest } from "../api/tasks.api";
import { useTasks } from "../context/TaskProvider";
// para usar el params
import { useParams, useNavigate } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import { getTasksRequest } from "../api/tasks.api";
//el contexto
//import { TaskContextProvider } from "../context/TaskProvider";
// entender el contexto
//import { useContext } from "react";

function TaskForm() {
  const params = useParams();
  const navigate = useNavigate();
  const { createTask, getTask, updateTask } = useTasks();
  //establecemos un estado para ser acctualizado
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <h1>{params.id ? "Edit task" : "New/Create Task"}</h1>
      <Formik
        //manejamos los estados o los valores
        /* initialValues={{
          title: "",
          description: "",
        }} */
        initialValues={task}
        //sirve para mantener los valores antiguos por que formik no lo actualiza automaticamente si no que se queda cocn los valores viejos
        enableReinitialize={true}
        //una promesa para pasar valores osea en los cuadritos eso esta recibiendo
        onSubmit={async (values, actions) => {
          console.log(values);
          //createTask(values);
          if (params.id) {
            await updateTask(params.id, values);
            // ruta inicial
            navigate("/");
          } else {
            await createTask(values);
            actions.resetForm()
            navigate('/')
          }
          setTask({
            title: "",
            description: "",
          });
          //actions.resetForm();
          //sirve para pasar los valores
          /*   try {
            const response = await createTaskRequest(values);
            console.log(response);
            actions.resetForm()
          } catch (error) {
            console.error(error);
          } */
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title..."
              onChange={handleChange}
              value={values.title}
            />

            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description..."
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save!"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
