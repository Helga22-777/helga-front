import { useState } from "react";
import Form from "./Form/Form";
import Header from "./Header/Header";
import List from "./List/List";

const TodoList = () => {
  const [list, setList] = useState([]);

  const handleAdd = (todo) => {
    setList((list) => [...list, todo]);
  };
  const handleDelete = (id) => {
    setList((list) => list.filter((item) => item.id !== id));
  };
  const completeTodo = (id) => {
    setList((list) =>
      list.map((item) => (item.id === id ? { ...item, do: !item.do } : item))
    );
  };
  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <Header todosCount={list.length} />
      <Form handleAdd={handleAdd} />
      <List list={list} onDelete={handleDelete} onClick={completeTodo} />
    </div>
  );
};
export default TodoList;
