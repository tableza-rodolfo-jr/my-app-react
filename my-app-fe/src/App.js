import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section className="vh-100" style={{backgroundColor: '#eee'}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-12 col-xl-10">
  
          <div className="card">
            <div className="card-header p-3">
              <h5 className="mb-0"><i className="fas fa-tasks me-2"></i>Task List</h5>
            </div>
            {/* style="position: relative; height: 400px"> */}
            {/* style={{position: 'relative', height: '400px'}} */}
            <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: 'relative', height: '400px'}}>
  
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
                  <tr className="fw-normal">
                    <th>
                      <img src={null}
                        className="shadow-1-strong rounded-circle" alt="avatar 1"
                        // style="width: 55px; height: auto;"
                        style={{width: '55px', height: 'auto'}} />
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
                  <tr className="fw-normal">
                    <th>
                      <img src={null}
                        className="shadow-1-strong rounded-circle" alt="avatar 1"
                        style={{width: '55px', height: 'auto'}} />
                      <span className="ms-2">Kate Moss</span>
                    </th>
                    <td className="align-middle">Make payment to Bluedart</td>
                    <td className="align-middle">
                      <h6 className="mb-0"><span className="badge bg-success">Low priority</span></h6>
                    </td>
                    <td className="align-middle">
                      <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
                          className="fas fa-check text-success me-3"></i></a>
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
                          className="fas fa-trash-alt text-danger"></i></a>
                    </td>
                  </tr>
                  <tr className="fw-normal">
                    <th>
                      <img src={null}
                        className="shadow-1-strong rounded-circle" alt="avatar 1"
                        style={{width: '55px', height: 'auto'}} />
                      <span className="ms-2">Danny McChain</span>
                    </th>
                    <td className="align-middle">Office rent</td>
                    <td className="align-middle">
                      <h6 className="mb-0"><span className="badge bg-warning">Middle priority</span></h6>
                    </td>
                    <td className="align-middle">
                      <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
                          className="fas fa-check text-success me-3"></i></a>
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
                          className="fas fa-trash-alt text-danger"></i></a>
                    </td>
                  </tr>
                  <tr className="fw-normal">
                    <th>
                      <img src={null}
                        className="shadow-1-strong rounded-circle" alt="avatar 1"
                        style={{width: '55px', height: 'auto'}} />
                      <span className="ms-2">Alexa Chung</span>
                    </th>
                    <td className="align-middle">Office grocery shopping</td>
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
                  <tr className="fw-normal">
                    <th className="">
                      <img src={null}
                        className="shadow-1-strong rounded-circle" alt="avatar 1"
                        style={{width: '55px', height: 'auto'}} />
                      <span className="ms-2">Ben Smith</span>
                    </th>
                    <td className="align-middle">Ask for Lunch to Clients</td>
                    <td className="align-middle">
                      <h6 className="mb-0"><span className="badge bg-success">Low priority</span></h6>
                    </td>
                    <td className="align-middle">
                      <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
                          className="fas fa-check text-success me-3"></i></a>
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
                          className="fas fa-trash-alt text-danger"></i></a>
                    </td>
                  </tr>
                  <tr className="fw-normal">
                    <th className="border-0">
                      <img src={null}
                        className="shadow-1-strong rounded-circle" alt="avatar 1"
                        style={{width: '55px', height: 'auto'}} />
                      <span className="ms-2">Annie Hall</span>
                    </th>
                    <td className="border-0 align-middle">Create weekly tasks plan</td>
                    <td className="border-0 align-middle">
                      <h6 className="mb-0"><span className="badge bg-warning">Medium priority</span></h6>
                    </td>
                    <td className="border-0 align-middle">
                      <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
                          className="fas fa-check text-success me-3"></i></a>
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
                          className="fas fa-trash-alt text-warning"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
  
            </div>
            <div className="card-footer text-end p-3">
              <button className="me-2 btn btn-link">Cancel</button>
              <button className="btn btn-primary">Add Task</button>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </section>
  );
}

export default App;
