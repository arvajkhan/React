function FilterTodo({ filter, setFilter }) {
  return (
    <div className="filter-buttons">
      {["All", "Active", "Completed"].map((item) => (
        <button
          key={item}
          className={filter === item ? "selected" : ""}
          onClick={() => setFilter(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default FilterTodo;