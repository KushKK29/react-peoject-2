function AppToDo() {
  return (
    <div class="container text-center">
      <div class="row kgrow">
        <div class="col-6">
          <input type="text" placeholder="Enter ToDoHere" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kgbutton">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AppToDo;
