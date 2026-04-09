export default function FilterBar({ setFilter }) {
  return (
    <div className="flex justify-center gap-3 mb-4">
      {["all", "completed", "pending"].map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className="px-3 py-1 rounded-full bg-white/30 text-white hover:bg-white/50 transition"
        >
          {f}
        </button>
      ))}
    </div>
  );
}