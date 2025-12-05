
import TaskItem from "../TaskItem/TaskItem";

import '..//../App/Style.css'
interface Props {
  tasks: string[];
  deleteTask: (index: number) => void;
}

export default function TaskList({ tasks, deleteTask }: Props) {
  return (
    <ul className="input">
      {tasks.map((task, index) => (
        <TaskItem key={index} index={index} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}
