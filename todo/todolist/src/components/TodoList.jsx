import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onUpdate, onComplete }) {
  if (todos.length === 0) {
    return <p className="empty">No tasks found!</p>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;