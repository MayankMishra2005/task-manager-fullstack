import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="flex-1 p-3 rounded-lg border-none outline-none bg-white/40 text-white placeholder-white/70"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
      />
      <button
        onClick={() => {
          addTask(title);
          setTitle("");
        }}
        className="bg-white text-purple-600 px-4 rounded-lg font-semibold hover:scale-105 transition"
      >
        Add
      </button>
    </div>
  );
}