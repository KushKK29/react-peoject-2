import { useContext, useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
function AppToDo() {
  const { onNew } = useContext(TodoItemsContext);
  const [todoname, settodoname] = useState("");
  const [tododate, settododate] = useState("");
  const today = new Date();
  const name = (event) => {
    let val = event.target.value;
    settodoname(val);
  };
  const date = (event) => {
    console.log(`${today.toDateString()} is the v=date`);
    let val = event.target.value;
    if (val.length === 0) {
      val = today.toDateString();
    }
    settododate(val);
  };

  return (
    <div class="container text-center">
      <div class="row kgrow">
        <div class="col-6">
          <input
            type="text"
            placeholder="Ener Your TO Do List"
            value={todoname}
            onChange={name}
          />
        </div>
        <div class="col-4">
          <input type="date" value={tododate} onChange={date} />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success kgbutton"
            onClick={() => {
              onNew(todoname, tododate);
              settododate("");
              settodoname("");
            }}
          >
            <IoAddSharp />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AppToDo;
