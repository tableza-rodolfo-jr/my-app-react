// import 
import React from "react";
import { getAvatar, log, getPriorityBadge } from "./TaskHelper";

//function
const styles = {
    avatarImg: {width: '55px', height: 'auto'}
}


 function Taskitem({ task, index, completeorRestoreTask, deleteTask }) {
    return(
        <tr className="fw-normal">
        <th>
          <img src={getAvatar()}
            className="shadow-1-strong rounded-circle" alt="avatar 1"
            
            style={styles.avatarImg} />
          
          <span className={`ms-2 ${task.completed ? 'text-decoration-line-through' : ''
        }  ${task.completed ? 'text-danger' : ''} `}>
            
            {task.name}</span>
        </th>
      
        <td className={`align-middle ${
            task.completed ? 'text-decoration-line-through' : ''
            } ${task.completed ? 'text-danger' : ''} `}>
              <span>{task.description}</span>
        </td>
           <td className="align-middle">
          <h6 className="mb-0">
            {getPriorityBadge(task.priority, task.completed)}
            </h6>
        </td>
        <td className="align-middle">
          <a href="#!" 
          data-mdb-toggle="tooltip" 
          title="Mark task as complete" 
          onClick={() => completeorRestoreTask(index, task.completed) }
          >
          
            <i className={`me-3 fas fa-${task.completed ? 'ban text-warning' : 'check text-success'}`}></i></a>
          <a href="#!" data-mdb-toggle="tooltip" title="Delete Current Task" 
          onClick={() => deleteTask(index)}><i
              className="fas fa-trash-alt text-danger"></i></a>
        </td>
      </tr>
    );

 }


//export
export default Taskitem;