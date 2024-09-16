function ToDoitem2() {
  let todoname = "GO TO college";
  let tododate = "4/10/2024";
  return (
    <div class="container">
      <div class="row kgrow">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kgbutton">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoitem2;
