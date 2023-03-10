// import 

//function
 function TaskCreate() {
    return (
        <>
      <form>
        <div className="input-group mb-3">
            
       <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
    <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
    
  </ul>
  
      <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
      <button className="btn btn-primary">Add Task</button>
        </div>
       

     </form>
        </>
       
    );
 }

//export
export default TaskCreate;