import Task from "../Task/Task";
import css from "./TasksList.module.css";
import { useSelector } from "react-redux";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.filters.status);
  const activeTasks = tasks.filter((task) => task.completed === false);
  const completedTasks = tasks.filter((task) => task.completed === true);

  return (
    <ul className={css.list}>
      {filter === "all" &&
        tasks.map((task) => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
      {filter === "active" &&
        activeTasks.map((task) => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
      {filter === "completed" &&
        completedTasks.map((task) => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
    </ul>
  );
};

export default TasksList;
