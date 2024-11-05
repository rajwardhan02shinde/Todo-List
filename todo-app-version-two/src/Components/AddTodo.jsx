import { useContext, useRef } from "react";
import Styles from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/store items/todo-items-store";

function AddTodo() {
  //addNewItem  method through useContext
  const { addNewItem } = useContext(TodoItemsContext);
  let todoNameElement = useRef();
  let todoDateElement = useRef();

  let handleAddButtonClicked = (event) => {
    event.preventDefault();
    //In the provided code, event.preventDefault() is being used within the handleAddButtonClicked function. This function is called when the form is submitted, either by clicking the button or pressing Enter while focused on one of the input fields.

    // The purpose of event.preventDefault() is to prevent the default behavior of the form submission, which typically involves refreshing the page or navigating to a new URL. By calling event.preventDefault(), you're telling the browser not to perform its default action for the event, which in this case would be to submit the form and potentially refresh the page.
    let todoName = todoNameElement.current.value;
    let todoDate = todoDateElement.current.value;

    addNewItem(todoName, todoDate);
    todoDateElement.current.value = "";
    todoNameElement.current.value = "";
  };

  return (
    <div className="container item-container">
      <form
        onSubmit={(event) => {
          handleAddButtonClicked(event);
        }}
        className="row"
      >
        <div className="col-6">
          <input
            ref={todoNameElement}
            className={Styles.todoInput}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input
            ref={todoDateElement}
            className={Styles.todoInput}
            type="date"
          />
        </div>
        <div className="col-2">
          <button
            onClick={handleAddButtonClicked}
            className={`btn  btn-success ${Styles.rsButton}`}
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
