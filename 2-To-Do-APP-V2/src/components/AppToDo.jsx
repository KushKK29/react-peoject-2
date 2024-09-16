function AppToDo() {
  return (
    <div className="container text-center">
      <div className="row kgrow">
        <div className="col-6">
          <input type="text" placeholder="Enter ToDoHere" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kgbutton">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AppToDo;
