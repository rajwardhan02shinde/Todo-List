import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext([]);

const TodoItemsContextProvider = ({ children }) => {
  let INT_VALUES = [
    {
      name: "Buy a iphone",
      date: "1/10/24",
    },
  ];

  const todoItemsReducer = (currTodoItems, action) => {
    if (action.type === "NEW_ITEM") {
      let newTodoItems = [
        ...currTodoItems,
        {
          name: action.playload.newItem,
          date: action.playload.newDate,
        },
      ];
      return newTodoItems;
    } else if (action.type == "DELETE_ITEM") {
      const newTodoItem = currTodoItems.filter(
        (item) =>
          item.name !== action.playload.todoName &&
          item.date !== action.playLoad.todoDate
      );
      return newTodoItem;
    }
  };
  let [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, INT_VALUES);
  let addNewItem = (newItem, newDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      playload: {
        newItem: newItem,
        newDate: newDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  let deleteItem = (todoName, todoDate) => {
    let deleteItemAction = {
      type: "DELETE_ITEM",
      playload: {
        todoName: todoName,
        todoDate: todoDate,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
