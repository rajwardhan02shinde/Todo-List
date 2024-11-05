import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";

import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
function App() {
  let [todoItems, setTodoItems] = useState([]);
  let handleOnClick = (newItem, newDate) => {
    //functional update - 8.38 calling setTodoItems with arrow function as an arguement
    //arrow function consist existing todoItems (cValue) as parameter
    setTodoItems((cValue) => [...cValue, { name: newItem, date: newDate }]);
  };

  let handleDeleteItem = (todoName, todoDate) => {
    const newTodoItem = todoItems.filter( //based on true or false that element is either included or removed in new array by filter method
      // callback func returns tru or false for each element in array
      (item) => item.name !== todoName && item.date !== todoDate
    );

    setTodoItems(newTodoItem);
  };

  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo handleOnClick={handleOnClick}></AddTodo>
        {/* abhi tak ye nahi sikha ki ek hi component mai alag alag values kese dale ,,, abhi keliye alag alag component banayenge */}
        <WelcomeMessage items={todoItems}></WelcomeMessage>
        <div className="items-container">
          <TodoItems
            onDeleteClick={handleDeleteItem}
            items={todoItems}
          ></TodoItems>
        </div>
      </center>
    </>
  );
}

export default App;
