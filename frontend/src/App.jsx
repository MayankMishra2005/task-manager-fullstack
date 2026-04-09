import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import FilterBar from "./components/FilterBar";
import Stats from "./components/Stats";

const API = "http://localhost:5001";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/tasks`);
      setTasks(res.data);
      localStorage.setItem("tasks", JSON.stringify(res.data));
    } catch {
      setError("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
    fetchTasks();
  }, []);

  const addTask = async (title) => {
    if (!title) return;
    try {
      await axios.post(`${API}/tasks`, { title });
      fetchTasks();
    } catch {
      setError("Error adding task");
    }
  };

  const toggleTask = async (id) => {
    await axios.patch(`${API}/tasks/${id}`);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    if (!confirm("Delete this task?")) return;
    await axios.delete(`${API}/tasks/${id}`);
    fetchTasks();
  };

  const editTask = async (id, title) => {
    await axios.patch(`${API}/tasks/${id}`, { title });
    fetchTasks();
  };

  const filtered = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
      <div className="w-full max-w-xl bg-white/20 backdrop-blur-xl rounded-xl p-6 shadow-xl">

        <h1 className="text-2xl text-white text-center mb-4">
          Task Manager 🚀
        </h1>

        <TaskForm addTask={addTask} />
        <FilterBar setFilter={setFilter} />
        <Stats tasks={tasks} />

        {loading && <p className="text-white text-center">Loading...</p>}
        {error && <p className="text-red-300 text-center">{error}</p>}

        <div className="mt-4 space-y-2">
          {filtered.length === 0 ? (
            <p className="text-white text-center">No tasks yet</p>
          ) : (
            filtered.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;