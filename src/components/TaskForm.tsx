import { Field, Form, Formik } from "formik";
import { AiOutlinePlus } from "react-icons/ai";
import { Tarea } from "../type";

const initialValues:Tarea = {
	id: 0,
	title: '',
	description: '',
	completed: false
};

type TaskFormProps = {
	addNewTask: (task:Tarea) => void;
	tareas: Tarea[];
};

const TaskForm = ({addNewTask, tareas}:TaskFormProps) => {
  
	const getId = (): number => new Date().getTime();

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Añadir tarea</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, {resetForm}) => {
					let newTask:Tarea =  {
						id: getId(),
						title: values.title,
						description: values.description,
						completed: false
					}
          addNewTask(newTask);
					resetForm();
        }}
      >
        {() => (
          <Form>
            <div className="form-group mb-3">
              <Field
                className="form-control shadow-none border-0"
                type="text"
                placeholder="Write a title"
                name="title"
                id="title"
              />
            </div>
            <div className="form-group mb-3">
              <Field
                className="form-control shadow-none border-0"
                type="textarea"
                placeholder="Write a description"
                name="description"
                id="description"
                row={2}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Save
              <AiOutlinePlus />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
