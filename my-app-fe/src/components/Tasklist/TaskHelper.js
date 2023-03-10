 import React from 'react';
import high from './assets/img/high-prio.webp';
 import low from './assets/img/low-prio.webp';
 import mid from './assets/img/medium.webp';

 
 const avatars = [high, low, mid];
 
 
 function getAvatar() {
    return avatars[Math.floor(Math.random() * 3)];
 }

    function log(msg) {
        console.log(`>>>${msg}`);
    }

 
    function getPriorityBadge(severity = 'low', completed = false) {
      const level = 
      severity === 'high' ? 'danger' : severity === 'mid' ? 'warning' : 'info';

     const badgeCompleted = completed ? (
      <small>
         <span className="ms-1 badge bg-secondary">completed</span>
         </small>
     ) : null;
       
      return (
         <>
         <small>
         <span className={`badge bg-${level}`}>{severity}</span>
         </small>
         {badgeCompleted}
        
         </>
      )
    }


 export { getAvatar, log , getPriorityBadge};