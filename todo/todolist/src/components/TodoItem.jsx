import { useState } from "react";

function TodoItem({ todo, onDelete, onUpdate, onComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (editText.trim()) {
      onUpdate(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onComplete(todo.id)}
      />

      {isEditing ? (
        <input
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span className={todo.completed ? "completed" : ""}>
          {todo.text}
        </span>
      )}

      <div className="actions">
        {isEditing ? (
          <button className="save-btn" onClick={handleUpdate}>
            Save
          </button>
        ) : (
          <button
            className="edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}

        <button
          className="delete-btn"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;