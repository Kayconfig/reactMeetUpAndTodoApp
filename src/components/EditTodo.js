import { useState } from "react";

function EditTodo({ previousTitle, updateTodo, setEditMode }) {
  const [title, saveTitle] = useState(previousTitle);

  function changeHandler(e) {
    saveTitle(e.target.value);
  }
  function saveHandler() {
    updateTodo(title);
    setEditMode(false);
  }

  function cancelHandler() {
    setEditMode(false);
  }

  return (
    <div>
      <div>
        <input type="text" value={title} onChange={changeHandler} />
      </div>
      <div>
        <button onClick={saveHandler}>save update</button>
        <button onClick={cancelHandler}>cancel update</button>
      </div>
    </div>
  );
}

export default EditTodo;
