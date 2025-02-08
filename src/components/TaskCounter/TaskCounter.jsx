import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";

const TaskCounter = () => {
  const tasks = useSelector((state) => state.tasks);
  const activeTasks = tasks.tasks.filter((task) => task.completed === false).length;
  const completedTasks = tasks.tasks.filter((task) => task.completed === true).length;

  return (
    <div>
      <p className={css.text}>Active: {activeTasks}</p>
      <p className={css.text}>Completed: {completedTasks}</p>
    </div>
  );
};

export default TaskCounter;
