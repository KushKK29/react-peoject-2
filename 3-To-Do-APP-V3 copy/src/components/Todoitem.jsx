// ToDoitem.js
import Listelements from "./Listelements";
import React from "react";
import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
function ToDoitem() {
  
  const { llist} = useContext(TodoItemsContext);
  



  return (
    <div>
      {llist.map((item) => (
        // Use a key for each mapped element to avoid rendering issues
        <Listelements
          // Adding a key to each element is important
          key={item.name}
          todoname={item.name}
          tododate={item.duedate}
        />
      ))}
    </div>
  );
}

export default ToDoitem;
