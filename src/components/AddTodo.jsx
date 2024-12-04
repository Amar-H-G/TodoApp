import { useRef, useState } from "react";
import { IoBagAddSharp } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  const todoItemNameUseRef = useRef();
  const todoItemDateUseRef = useRef();

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoItemName = todoItemNameUseRef.current.value;
    const todoItemDate = todoItemDateUseRef.current.value;
    todoItemNameUseRef.current.value = "";
    todoItemDateUseRef.current.value = "";
    onNewItem(todoItemName, todoItemDate);
  };

  return (
    <div className="container  text-center">
      <form className="row a-row" onSubmit={handleAddButton}>
        <div className="col-5">
          <input
            type="text"
            ref={todoItemNameUseRef}
            placeholder="Enter your todo here"
          />
        </div>
        <div className="col-5">
          <input type="date" ref={todoItemDateUseRef} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success a-button">
            <IoBagAddSharp />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
