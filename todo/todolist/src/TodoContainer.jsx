import { useState } from "react";

import AddTodo from "./components/AddTodo";
import SearchTodo from "./components/SearchTodo";
import FilterTodo from "./components/FilterTodo";
import TodoList from "./components/TodoList";

import "./App.css";

function TodoContainer() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Add Todo
  const handleAdd = (text) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };

  // Delete Todo
  const handleDelete = (id) => {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== id)
    );
  };

  // Update Todo
  const handleUpdate = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, text: newText }
          : todo
      )
    );
  };

  // Complete Todo
  const handleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Search and Filter
  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      (filter === "Active" && !todo.completed) ||
      (filter === "Completed" && todo.completed);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="app-container">
      <div className="todo-card">

        <h1>My Todo List ✦</h1>
        <p>Organize your day, one task at a time.</p>

        <AddTodo onAdd={handleAdd} />

        <SearchTodo
          search={search}
          setSearch={setSearch}
        />

        <FilterTodo
          filter={filter}
          setFilter={setFilter}
        />

        <TodoList
          todos={filteredTodos}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          onComplete={handleComplete}
        />

      </div>
    </div>
  );
}

export default TodoContainer;