export default function Stats({ tasks }) {
  const total = tasks.length;
  const done = tasks.filter(t => t.completed).length;

  return (
    <div className="text-center text-white text-sm mb-3">
      {done}/{total} tasks completed
    </div>
  );
}