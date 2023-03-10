// import 
import TaskLogo from "./high-prio.webp";
//function
const styles = {
    avatarImg: {width: '55px', height: 'auto'}
}


 function Taskitem() {
    return(
        <tr className="fw-normal">
        <th>
          <img src={TaskLogo}
            className="shadow-1-strong rounded-circle" alt="avatar 1"
            // style="width: 55px; height: auto;"
            style={styles.avatarImg} />
          <span className="ms-2">Alice Mayer</span>
        </th>
        <td className="align-middle">
              <span>Call Sam For payments</span>
        </td>
           <td className="align-middle">
          <h6 className="mb-0"><span className="badge bg-danger">High priority</span></h6>
        </td>
        <td className="align-middle">
          <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
              className="fas fa-check text-success me-3"></i></a>
          <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
              className="fas fa-trash-alt text-danger"></i></a>
        </td>
      </tr>
    );

 }


//export
export default Taskitem;