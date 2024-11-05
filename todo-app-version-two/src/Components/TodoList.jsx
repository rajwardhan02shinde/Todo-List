import { AiFillDelete } from "react-icons/ai";
import Styles from "./AddTodo.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/store items/todo-items-store";

function TodoList({ todoName, todoDate }) {
  const deleteItemObj = useContext(TodoItemsContext);
  const deleteItem = deleteItemObj.deleteItem;
  // let {todoName,todoDate}=props;
  return (
    //return madey tech yeta je aplyala ui madey bagayche ahe
    <div className="container item-container ">
      <div className="row ">
        <div className="col-6 rs-col">{todoName}</div>
        <div className="col-4 rs-col">{todoDate}</div>
        <div className="col-2">
          <button
            //varti jo todo name dilay toch yenar jite pan karan aplyala je button dabtoy tyacha corresponding the list item delete karycha ahe
            onClick={() => deleteItem(todoName, todoDate)}
            type="button "
            className={`btn btn-danger ${Styles.rsButton} `}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoList;
