import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

class ProjectList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { projects: []};
      this.deleteProject = this.deleteProject.bind(this);
      this.refreshProject = this.refreshProject.bind(this);
      this.routeAddProject = this.routeAddProject.bind(this);
    } 

routeAddProject(){

    let path =`/project`;
    this.props.history.push(path);

}

componentDidMount() {
    axios.get("http://localhost:8081/test/api/v1/project").then(response => {
      this.setState({ projects: response.data });
      console.table(response.data);
      console.warn("project Service is working");

      this.refreshProject();
    });
}

refreshProject(){
    axios.get("http://localhost:8081/test/api/v1/project").then(response => {
      console.warn("Refresh Service is working");
      this.setState({ projects: response.data });
    });
}

routeEditProject(id) {
  
  this.props.history.push(`/project/${id}`);
}

deleteProject(id) {
  axios
    .delete("http://localhost:8081/test/api/v1/project/" + id)
    .then(response => {
      console.warn("Delete Service is working");
      this.refreshProject(response);

      alert(" Defect deleted successfully");
    });
}
   
render(){
  console.log(this.state.projects);
    return (

/* <div class="w3-container w3-flat-turquoise">
  <h2>London</h2>
  <p>London is the most populous city in the United Kingdom, with a metropolitan area of over 9 million inhabitants.</p>
</div> */

<div >
        <br />

        <h3 align="center">LIST-PROJECTS</h3>
        <br />
        <div className="container" onLoad={this.refreshProject}>
       

       {/*  <button
            className="btn btn-primary"
            type="submit"
            onClick={this.routeAddProject}
          >
            <i className="fa fa-edit"> Add</i>
          </button>

          <br /> */}

          <br />

          <table className="table ">
            <thead>
              <tr>
                <th>PROJECT-ID</th>
                <th>PROJECT-NAME</th>
                <th>PROJECT-DESCRIPTION</th>
                <th> &nbsp; &nbsp; &nbsp; &nbsp;ACTION</th>
              </tr>
              
              {this.state.projects.map(projects => 
              (
                
                <tr key={projects.id}>
                  <td>{projects.id}</td>
                  <td>{projects.projectName}</td>
                  <td>{projects.projectDescription}</td>
                  <td>
                    <button className="btn btn-primary" type="submit">
                      <i
                      
                        className="fa fa-edit"
                        onClick={() => this.routeEditProject(projects.id)}
                      >
                        Edit
                      </i>
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-primary"
                      //NORMAL CALL
                      // onClick={() => this.deleteBook(book.bookId)}

                      //CALL WITH CONFIRM MESSAGE
                      onClick={() =>
                        window.confirm(
                          "Are you sure you wish to delete this Project? "
                        ) && this.deleteProject(projects.id)
                      }
                    >
                      <i className="fa fa-trash"> Delete</i>
                    </button>
                  </td>
                </tr>
              ))}
           
            </thead>

            </table>
            </div >
        </div >
       
    );
}



}
export default ProjectList;