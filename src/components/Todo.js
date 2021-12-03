import { useState } from "react";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";

function Todo({ title, updateTodo, deleteTodo }) {
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  function handleEdit() {
    //handle edit
    setEditMode(!editMode);
  }
  function handleDelete() {
    //handle delete
    setDeleteMode(!deleteMode);
  }
  return (
    <div>
      {editMode && (
        <EditTodo
          previousTitle={title}
          setEditMode={setEditMode}
          updateTodo={updateTodo}
        />
      )}
      {deleteMode && (
        <DeleteTodo
          deleteTodo={deleteTodo}
          setDeleteMode={setDeleteMode}
          title={title}
        />
      )}
      {!editMode && !deleteMode && (
        <>
          <h1>{title}</h1>
          <div>
            <button onClick={handleEdit}>edit</button>
            <button onClick={handleDelete}>delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Todo;
