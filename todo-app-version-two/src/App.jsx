import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItemsContextProvider from "./store/store items/todo-items-store";
import TodoItems from "./Components/TodoItems";
import { useReducer } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>

        <WelcomeMessage></WelcomeMessage>
        <div className="items-container">
          <TodoItems></TodoItems>
        </div>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
