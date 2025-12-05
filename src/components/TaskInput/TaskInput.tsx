import { useState } from "react";
import { Plus } from "lucide-react";
import '..//../App/Style.css'
interface Props {
  addTask: (task: string) => void;
}

export default function TaskInput({ addTask }: Props) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;
    addTask(value.trim());
    setValue("");
  };

  return (
    <div className="todo-input1">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Գրել նոր task…"
        className="todo-input"
      />

      <button
        onClick={handleAdd}
        className="add-btn"
      >
        <Plus size={18} /> Ավելացնել
      </button>
    </div>
  );
}
