// import 

import React, { useState } from "react";
import { log } from "./TaskHelper";

//function
 function TaskCreate({addTask}) {

   const [value, setValue] = useState('');

   const handleSubmit = (e) => {
      
     e.preventDefault();
     if (!value) return;
     log(`adding of task initiated`);
     addTask(value);
     setValue('');
   };
    return (   
        <>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
            
       <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
    <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
    
  </ul>
  
      <input type="text" 
      className="form-control" 
      value={value}
      placeholder="add a new task ....."
      onChange={e =>  {
         // log(`change in value: ${e.target.value}`);
         setValue(e.target.value);
      } }
      
      />
      <button className="btn btn-primary">Add Task</button>
        </div>
       

     </form>
        </>
       
    );
 }

//export
export default TaskCreate;