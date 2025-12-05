
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import '..//../App/Style.css'
interface Props {
  task: string;
  index: number;
  deleteTask: (index: number) => void;
}

export default function TaskItem({ task, index, deleteTask }: Props) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-50 border rounded-xl p-3 flex justify-between items-center"
    >
      <span>{task}</span>
      <button onClick={() => deleteTask(index)} className="text-red-500 hover:text-red-700">
        <Trash2 size={20} />
      </button>
    </motion.li>
  );
}