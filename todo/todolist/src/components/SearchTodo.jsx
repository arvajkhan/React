function SearchTodo({ search, setSearch }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search your tasks..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchTodo;