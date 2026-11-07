import { useState, useMemo } from "react";
import "./TodoList.css";

const seed = [
  { id: 1, text: "Plan the week", done: true },
  { id: 2, text: "Reply to client emails", done: false },
  { id: 3, text: "Buy groceries", done: false },
];

function TodoList() {
  const [todos, setTodos] = useState(seed);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // Add
  const addTodo = () => {
    const t = text.trim();
    if (!t) return;
    setTodos([{ id: Date.now(), text: t, done: false }, ...todos]);
    setText("");
  };

  // Delete
  const removeTodo = (id) => setTodos(todos.filter((t) => t.id !== id));

  // Update: toggle done
  const toggleTodo = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  // Update: edit text
  const startEdit = (t) => {
    setEditId(t.id);
    setEditText(t.text);
  };
  const saveEdit = () => {
    const v = editText.trim();
    if (v)
      setTodos(todos.map((t) => (t.id === editId ? { ...t, text: v } : t)));
    setEditId(null);
  };

  // Search + filter
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return todos.filter(
      (t) =>
        t.text.toLowerCase().includes(q) &&
        (filter === "all" || (filter === "done" ? t.done : !t.done)),
    );
  }, [todos, query, filter]);

  const highlight = (s) => {
    const q = query.trim();
    if (!q) return s;
    const i = s.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return s;
    return (
      <>
        {s.slice(0, i)}
        <mark>{s.slice(i, i + q.length)}</mark>
        {s.slice(i + q.length)}
      </>
    );
  };

  const left = todos.filter((t) => !t.done).length;

  return (
    <div className="td">
      <div className="td-wrap">
        <h1>Today</h1>
        <p className="td-sub">
          {left} of {todos.length} tasks left
        </p>

        <div className="td-add">
          <input
            type="text"
            value={text}
            placeholder="Add a new task"
            aria-label="New task"
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
          />
          <button className="td-btn" onClick={addTodo}>
            Add task
          </button>
        </div>

        <div className="td-search">
          <input
            type="text"
            value={query}
            placeholder="Search tasks"
            aria-label="Search tasks"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="td-tabs">
          {["all", "active", "done"].map((f) => (
            <button
              key={f}
              className="td-tab"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f[0].toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="td-empty">
            {todos.length === 0
              ? "No tasks yet. Add your first one above."
              : "No tasks match your search."}
          </p>
        ) : (
          <ul>
            {visible.map((t) => (
              <li key={t.id} className={t.done ? "done" : ""}>
                <button
                  className="td-check"
                  aria-label={t.done ? "Mark as not done" : "Mark as done"}
                  onClick={() => toggleTodo(t.id)}
                >
                  {t.done ? "✓" : ""}
                </button>

                {editId === t.id ? (
                  <>
                    <input
                      type="text"
                      autoFocus
                      value={editText}
                      aria-label="Edit task"
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveEdit();
                        if (e.key === "Escape") setEditId(null);
                      }}
                    />
                    <button className="td-ico" onClick={saveEdit}>
                      Save
                    </button>
                    <button className="td-ico" onClick={() => setEditId(null)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <span className="td-text">{highlight(t.text)}</span>
                    <button className="td-ico" onClick={() => startEdit(t)}>
                      Edit
                    </button>
                    <button
                      className="td-ico del"
                      onClick={() => removeTodo(t.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default TodoList;
