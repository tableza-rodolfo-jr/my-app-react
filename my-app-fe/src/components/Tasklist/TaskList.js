// import 
import React, { useState} from "react";

import Taskitem from "./Taskitem";
import TaskCreate from "./TaskCreate";

const styles = {
   body: { backgroundColor: '#eee' },
   cardBody: { position: 'relative', 
   height: '400px'},
}
//function
 function TaskList() {
      
     const [tasks, setTasks] = useState([
      {
          avatar: "high-prio.webp",
          name: "Sharmaine Francisco",
          description: "Eating a burger",
          priority: "high",
          completed: false,
     },
     {
      avatar: "low-prio.webp",
      name: "Caithlyn Jhaine Tableza",
      description: "Drawing a anime character",
      priority: "low",
      completed: false,
    },
   {
    avatar: "medium.webp",
    name: "Zane Tableza",
    description: "Coding in computer",
    priority: "mid",
    completed: false,
    } 
    ])

    return (
        <section className="vh-100" style={styles.body}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-12 col-xl-10">
  
          <div className="card">
            <div className="card-header p-3">
              <h5 className="mb-0"><i className="fas fa-tasks me-2"></i>Task List</h5>
            </div>
            {/* style="position: relative; height: 400px"> */}
            {/* style={{position: 'relative', height: '400px'}} */}
            <div className="card-body" data-mdb-perfect-scrollbar="true" style={styles.cardBody}>
  
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th scope="col">Team Member</th>
                    <th scope="col">Task</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                 {/* <Taskitem /> */}
                 {
                        tasks.map((task, index) => {
                             return(
                              <tr className="fw-normal">
                              <th>
                                <img src={null}
                                  className="shadow-1-strong rounded-circle" alt="avatar 1"
                                  // style="width: 55px; height: auto;"
                                  style={styles.avatarImg} />
                                <span className="ms-2">
                                  {task.name}
                                  </span>
                              </th>
                              <td className="align-middle">
                                    <span>
                                      {task.description}
                                      </span>
                              </td>
                                 <td className="align-middle">
                                <h6 className="mb-0"><span className="badge bg-danger">
                                  {task.priority} priority
                                  </span></h6>
                              </td>
                              <td className="align-middle">
                                <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
                                    className="fas fa-check text-success me-3"></i></a>
                                <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
                                    className="fas fa-trash-alt text-danger"></i></a>
                              </td>
                            </tr>
                             )
                    
                        }) 
                 }
                </tbody>
              </table>
  
            </div>
            <div className="card-footer text-end p-3">
                <TaskCreate />
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </section>
    );
 }

//export
export default TaskList;