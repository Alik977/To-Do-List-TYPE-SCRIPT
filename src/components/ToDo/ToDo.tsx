import  { useState } from "react";

import '..//../App/Style.css'
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";

export default function ToDo() {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index: number) => {
    const confirmation = window.confirm("Ջնջե՞լ այս task-ը");
    if (!confirmation) return;
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="TODO">To-Do List</h1>

        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}