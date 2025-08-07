import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WecomeMessage";
import "./App.css";
import { useState } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, ItemDueDate) => {
  setTodoItems((currValue)=> [
      ...currValue,
      {
        name: itemName,
        dueDate: ItemDueDate,
      },
    ])
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
