import { useRef } from "react";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };
  return (
    <div classNameName="Container text-center">
      <form classNameName="row  allrow" onSubmit={handleAddButtonClicked}>
        <div classNameName="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            ref={todoNameElement}
          />
        </div>
        <div classNameName="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div classNameName="col-2">
          <button type="submit" classNameName="btn btn-success  all-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
