//Nos ayuda a manejar mejor las rutas
//crear y navegar
import { Route, Routes } from "react-router-dom";

import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskProvider";
import '../src/index.css'
function App() {
  return (
    <main className="bg-zinc-900 h-screen">
    <div className="bg-zinc-800 h-screen">
      {/** Lo de abajo es un contexto que nos ofrece react para la comunicacion de los nodos hijos con react */}
      <Navbar />
      <div className="container mx-auto py-4 px-10">
      <TaskContextProvider>
       
        <Routes>
          {/** // Cuando se muestre esta ruta '/' */}
          <Route path="/" element={<TasksPage />} />
          <Route path="/new" element={<TaskForm />} />
          {/** paramemtro dinamico o params que viene con express */}
          <Route path="/edit/:id" element={<TaskForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TaskContextProvider>
      </div>
    </div>
    </main>
  );
}

export default App;
