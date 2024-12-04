import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem from "./components/TodoItem";
import TodoItems from "./components/todoItemContainer";
import Message from "./components/welcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItemAdd = (itemName, itemDueDate) => {
    setTodoItems((currentItem) => [
      ...currentItem,
      {
        name: itemName,
        duedate: itemDueDate,
      },
    ]);
  };

  const handleItemDelete = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItem);
  };

  return (
    <center className="todo-container">
      <AppName />
      <div className="all-container</div>">
        <AddTodo onNewItem={handleNewItemAdd} />
        <Message todoItems={todoItems}></Message>
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleItemDelete}
        ></TodoItems>
      </div>
    </center>
  );
}

export default App;
