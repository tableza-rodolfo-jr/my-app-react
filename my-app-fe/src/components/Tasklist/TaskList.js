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
 
    const completeorRestoreTask = (index, restore = false) => {
      console.log(`Complete task call for id ${index} from parent`);
      const newTasks = [...tasks]; //create a copy;
      newTasks[index].completed = !restore; // manipulate data;
      setTasks(newTasks); // push/save modified data;
    };
     
    const deleteTask = (index) => {
       console.log(`deleted task ofr id ${index}`);
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    };

    const addTask = value => {
     console.log(`parent is working`);
    const newTasks = [...tasks];
    newTasks.push({
      avatar: '',
      name: "Zane Tableza",
      description: value,
      priority: "high",
      completed: false,

    });
    setTasks(newTasks);
    };






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
                   {
                    tasks.map((task, index) => {
                      return (<Taskitem
                       task={task}  
                       key={index}
                       index={index}
                       completeorRestoreTask={completeorRestoreTask}
                       deleteTask={deleteTask}/>)
                    })
                   }  
                </tbody>
              </table>
  
            </div>
            <div className="card-footer text-end p-3">
                <TaskCreate 
                 addTask={addTask}
                />
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