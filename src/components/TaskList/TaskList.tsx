
import TaskItem from "../TaskItem/TaskItem";

import '..//../App/Style.css'
interface Props {
  tasks: { text: string; done: boolean }[];
  deleteTask: (index: number) => void;
  toggleDone: (index: number) => void;
}


export default function TaskList({ tasks, deleteTask,toggleDone }: Props) {
  return (
    <ul className="input">
      {tasks.map((task, index) => (
        <TaskItem key={index} index={index} task={task} deleteTask={deleteTask} toggleDone={toggleDone}/>
      ))}
    </ul>
  );
}
