


import '..//../App/Style.css'
import Checkbox from "../CheckboxTodo/CheckboxTodo";


interface Props {
  task: { text: string; done: boolean };
  index: number;
  deleteTask: (index: number) => void;
  toggleDone: (index: number) => void;
}

export default function TaskItem({ task, index, deleteTask, toggleDone }: Props) {
  return (
    <li className="task-item">
      <Checkbox
        checked={task.done}
        onChange={() => toggleDone(index)}
      />

      <span className={task.done ? "line-through" : ""}>
        {task.text}
      </span>

      <button className="delete-btn" onClick={() => deleteTask(index)}>
        ✖
      </button>
    </li>
  );
}