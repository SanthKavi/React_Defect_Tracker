import React, { Component } from 'react';
import './Sidebar.css';


class Header extends Component {
    state = {  }


    render() { 
        return (  <nav class="navbar navbar-light font-weight-bold" style={{backgroundColor: '#e3f2fd'}}>
         <a class="navbar-brand text-primary text">DEFECT TRACKER</a>
      </nav>
      );
    }
}
 
export default Header;