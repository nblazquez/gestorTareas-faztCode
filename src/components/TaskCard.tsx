import { Tarea } from "../type";

type TaskCardProps = {
    tarea: Tarea;
    deleteTask: (id:number) => void;
};

const TaskCard = ({tarea, deleteTask}:TaskCardProps) => {

    return (
        <div className="card card-body bg-secondary text-dark">
          <h2>{tarea.title.toUpperCase()}</h2>
          <p>{tarea.id}</p>
          <p>{tarea.description}</p>
          <button 
            className="btn btn-danger"
            onClick={() => deleteTask(tarea.id)}>
              Delete
          </button>
        </div>
    )
}

export default TaskCard
