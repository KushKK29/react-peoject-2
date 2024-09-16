import React from "react";
import ToDoitem from "./ToDOitem";
const Todoitemx = ({ todoItems }) => {
  console.log(todoItems);
  return (
    <>
      <div className="Cnk">
        {todoItems.map((item) => {
          <ToDoitem todoname={item.name} tododate={item.duedate}></ToDoitem>;
        })}
      </div>
    </>
  );
};
export default Todoitemx;
