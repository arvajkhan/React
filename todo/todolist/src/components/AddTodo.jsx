function AddTodo({ onAdd }) {
  return (
    <form
      className="add-form"
      onSubmit={(e) => {
        e.preventDefault();
        const value = e.target.elements.todo.value.trim();

        if (value) {
          onAdd(value);
          e.target.reset();
        }
      }}
    >
      <input
        name="todo"
        type="text"
        placeholder="What needs to be done?"
      />
      <button type="submit">+ Add Task</button>
    </form>
  );
}

export default AddTodo;