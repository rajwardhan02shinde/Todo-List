import { useContext } from "react";
import { TodoItemsContext } from "../store/store items/todo-items-store";
import TodoList from "./TodoList";
function TodoItems() {
  const contextObj = useContext(TodoItemsContext);
  let { todoItems } = contextObj;

  return (
    <>
      {todoItems.map((item) => (
        <TodoList
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
        ></TodoList>
      ))}
    </>
  );
}
export default TodoItems;
