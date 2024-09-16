import AppName from "./components/AppName";
import AppToDo from "./components/AppToDo";
import ToDoitem1 from "./components/ToDOtem1";
import ToDoitem2 from "./components/ToDOitem2";
function app() {
  return (
    <center className="todo-container">
      placeholder
      <AppName></AppName>
      <AppToDo></AppToDo>
      <div className="Cnk">
        <ToDoitem1></ToDoitem1>
        <ToDoitem2></ToDoitem2>
      </div>
    </center>
  );
}
export default app;
