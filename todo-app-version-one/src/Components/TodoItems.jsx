import TodoList from "./TodoList";
function TodoItems(props) {
  let { items } = props;
  let { onDeleteClick } = props;
  return (
    <>
      {items.map((item) => (
        <TodoList
          key={item.name}
          onDeleteClick={onDeleteClick}
          todoName={item.name}
          todoDate={item.date}
        ></TodoList>
      ))}
    </>
  );
}
export default TodoItems;
