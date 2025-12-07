import  { useState } from "react";

import '..//../App/Style.css'
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";

export default function ToDo() {
 const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>([]);

  const addTask = (task: string) => {
  setTasks([...tasks, { text: task, done: false }]);
};

  const deleteTask = (index: number) => {
    const confirmation = window.confirm("Ջնջե՞լ այս task-ը");
    if (!confirmation) return;
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const toggleDone = (index: number) => {
  setTasks(tasks.map((task, i) =>
    i === index ? { ...task, done: !task.done } : task
  ));
};

  return (
    <div className="">
      <div className="">
        <h1 className="TODO">To-Do List</h1>

        <TaskInput addTask={addTask} />
       <TaskList tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
    </div>
    </div>
  );
}