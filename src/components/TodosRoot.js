import useTodos from "./customHooks/TodoCustomHook";
import Todo from "./Todo";

function TodosRoot() {
  const [{ todos, todoTitle, setTodoTitle, updateTodo, deleteTodo, addTodo }] =
    useTodos();

  function handleKeyUp(e) {
    if (e.key === "Enter") {
      addTodo();
    }
  }
  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="enter todo"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          onKeyUp={handleKeyUp}
        />
      </div>
      <div>
        {todos.map((todo, index) => (
          <Todo
            title={todo.title}
            deleteTodo={deleteTodo(todo.id)}
            updateTodo={updateTodo(todo.id)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default TodosRoot;
