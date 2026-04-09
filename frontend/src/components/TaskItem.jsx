import { useState } from "react";

export default function TaskItem({ task, toggleTask, deleteTask, editTask }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  return (
    <div className="flex justify-between items-center bg-white/30 p-3 rounded">

      {editing ? (
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-1 p-1 rounded"
        />
      ) : (
        <span
          onClick={() => toggleTask(task.id)}
          className={`flex-1 cursor-pointer ${
            task.completed ? "line-through text-gray-300" : "text-white"
          }`}
        >
          {task.title}
        </span>
      )}

      <div className="flex gap-2">
        {editing ? (
          <button onClick={() => {
            editTask(task.id, newTitle);
            setEditing(false);
          }}>
            Save
          </button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}

        <button onClick={() => deleteTask(task.id)}>❌</button>
      </div>
    </div>
  );
}