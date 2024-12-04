import TodoItem from "./TodoItem";
import styles from "./todoItemsContainer.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={`${styles["items-container"]} my-5 `}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.duedate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
