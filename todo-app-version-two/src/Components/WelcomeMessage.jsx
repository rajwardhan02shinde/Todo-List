import { useContext } from "react";
import { TodoItemsContext } from "../store/store items/todo-items-store";
let WelcomeMessage = () => {
  //destructure
  let { todoItems } = useContext(TodoItemsContext);

  if (todoItems.length === 0) {
    return <p>Enter your Todos</p>;
  }
};
export default WelcomeMessage;
