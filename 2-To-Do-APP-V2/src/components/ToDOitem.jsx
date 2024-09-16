function ToDoitem({ todoname, tododate }) {
  console.log("My name pagal");
  return (
    <div className="container">
      <div className="row kgrow">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger kgbutton">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoitem;
