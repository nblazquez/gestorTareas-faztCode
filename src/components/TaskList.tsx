import { Tarea } from "../type";
import TaskCard from "./TaskCard";

type TaskListProps = {
  tareas: Tarea[];
  deleteTask: (id:number) => void;
};

const TaskList = ({ tareas, deleteTask }: TaskListProps) => {
  return (
    <>
      {tareas.map((tarea) => (
        <div key={tarea.id} className="col-md-4">
            <TaskCard 
              tarea={tarea}
              deleteTask={deleteTask} />
        </div>
      ))}
    </>
  );
};

export default TaskList;