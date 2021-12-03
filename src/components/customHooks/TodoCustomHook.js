import { useState } from "react";

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  function updateTodo(id) {
    return function (title) {
      let todo = todos.find((todo) => todo.id === +id);
      if (todo) {
        todo.title = title;
        setTodos([...todos]);
      }
    };
  }

  function deleteTodo(id) {
    return function () {
      let newTodos = todos.filter((todo) => todo.id !== +id);
      setTodos([...newTodos]);
    };
  }

  function addTodo() {
    todos.push({
      title: todoTitle,
      id: todos.length + 1,
    });
    setTodos([...todos]);
    setTodoTitle("");
  }

  return [
    {
      todos,
      setTodos,
      todoTitle,
      setTodoTitle,
      updateTodo,
      deleteTodo,
      addTodo,
    },
  ];
}

export default useTodos;
