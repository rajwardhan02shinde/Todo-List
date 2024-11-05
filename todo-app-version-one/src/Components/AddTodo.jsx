import { useRef } from "react";
import Styles from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ handleOnClick }) {
  let todoNameElement = useRef();
  let todoDateElement = useRef();

  let handleAddButtonClicked = (event) => {
    event.preventDefault();

    let todoName = todoNameElement.current.value;
    let todoDate = todoDateElement.current.value;
    console.log(`${todoName} and ${todoDate}`);
    handleOnClick(todoName, todoDate);
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
