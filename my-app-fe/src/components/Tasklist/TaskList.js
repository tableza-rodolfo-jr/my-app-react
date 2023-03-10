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
                 <Taskitem />
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