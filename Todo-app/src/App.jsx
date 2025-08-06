import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WecomeMessage";
import "./App.css";
import { useState } from "react";
function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "01/08/2025",
  //   },
  //   {
  //     name: "go to college",
  //     dueDate: "01/08/2025",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, ItemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: ItemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem =(todoItemName)=>{
    const newTodoItems=todoItems.filter((item)=>{ item.name !== todoItemName})
  setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <div className="add-todo">
        <AddTodo onNewItem={handleNewItem}></AddTodo>
      </div>
      {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}

      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}
export default App;
