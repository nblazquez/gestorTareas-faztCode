import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import logo from "./logo.svg";
import { Tarea } from "./type";

type AppProps = {
  title: string;
};

function App({ title }: AppProps) {
  const [tareas, setTareas] = useState<Tarea[]>([]);

  const addNewTask = (tarea: Tarea) => {
    setTareas(
      [...tareas,
      tarea]
    );
  };

  const deleteTask = (id: number) => setTareas(tareas.filter(tarea => tarea.id !== id));

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="Logo React" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm 
              addNewTask={addNewTask}
              tareas={tareas} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList 
              tareas={tareas}
              deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
