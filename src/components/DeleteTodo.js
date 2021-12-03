function DeleteTodo({ deleteTodo, title, setDeleteMode }) {
  function handleConfirm() {
    deleteTodo();
    setDeleteMode(false);
  }

  function handleCancel() {
    setDeleteMode(false);
  }

  return (
    <div>
      <h5>Are you sure you want to delete: {title}</h5>
      <div>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleConfirm}> Confirm </button>
      </div>
    </div>
  );
}

export default DeleteTodo;
