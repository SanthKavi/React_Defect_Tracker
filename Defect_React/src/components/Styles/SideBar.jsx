import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './Sidebar.css';



class SideBar extends Component {
    constructor(props) {
        super(props); 
        this.state = {projects: [], name:null};
        this.routeAddProject = this.routeAddProject.bind(this);
    } 

    routeAddProject(){

        let path =`/project`;
        this.props.history.push(path);
    }
    
    render() { 
        return ( 
            
        //     <div class="wrapper">
           
        //     <nav id="sidebar">
        //         {/* <div class="sidebar-header">
        //             <h3>Bootstrap Sidebar</h3>
        //         </div> */}
        
        //         <ul class="list-unstyled components">
                   
        //             <li class="active">
        //                 <a href= "/project" >Add Project</a>
                        
        //             </li>
        //             <li>
        //                 <a href="#">Add Defect</a>
        //             </li>
                    
        //         </ul>
        //     </nav>
        
        // </div>

    <ul>
  <li><a class="active" href="/project">Add Project</a></li>
  <li><a href="#news">Add Defect</a></li>
  <li><a href="#contact">Add Employee</a></li>
 
</ul>

         );
    }
}
 
export default SideBar;

