import AppName from "./components/AppName";
import AppToDo from "./components/AppToDo";
import { TodoItemsContext } from "./components/store/todo-items-store";
import ToDoitem from "./components/Todoitem";
import { useState, useContext } from "react";
function app() {
  let inillist = [];

  const onNew = (iname, iduedate) => {
    let newlist = [...llist, { name: iname, duedate: iduedate }];
    setllist(newlist);
  };
  const [llist, setllist] = useState(inillist);
  const handeldeleteitem = (item) => {
    const newlist = llist.filter((i) => i.name !== item);
    setllist(newlist);
    console.log(item);
  };

  const defaultitems = [{ name: "buy ghee", duedate: "20/20/2020" }];

  return (
    <TodoItemsContext.Provider
      value={{
        llist: llist,
        onNew: onNew,
        handeldeleteitem: handeldeleteitem,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AppToDo onNewitem={onNew}></AppToDo>
        {llist.length === 0 && <h2>Enjoy your day</h2>}
        <ToDoitem></ToDoitem>
      </center>
    </TodoItemsContext.Provider>
  );
}
export default app;
