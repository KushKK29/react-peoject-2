import AppName from "./components/AppName";
import AppToDo from "./components/AppToDo";
import Todoitemx from "./components/Todoitemx";
function app() {
  let todoItems = [
    {
      name: "Buy milk",
      duedate: "04/10/2024",
    },
    {
      name: "Go To college",
      duedate: "04/10/2024",
    },
    {
      name: "Go To college",
      duedate: "04/10/2024",
    },
  ];
  return (
    <center className="todo-container">
      placeholder
      <AppName></AppName>
      <AppToDo></AppToDo>
      <Todoitemx todoItems={todoItems}></Todoitemx>
    </center>
  );
}
export default app;
