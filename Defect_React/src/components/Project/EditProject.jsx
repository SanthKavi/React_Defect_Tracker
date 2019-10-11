import React, { Component } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';

class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = { defects: [], name: null };
    this.state.defects = {
      id: this.props.match.params.id,
      projectName: "",
      projectDescription: ""
    };
    this.handleChangeid = this.handleChangeid.bind(this);
    this.handleChangename = this.handleChangename.bind(this);
    this.handleChangedscr = this.handleChangedscr.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.routeProjectList = this.routeProjectList.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:8081/test/api/v1/project/" + this.props.match.params.id
      )
      .then(result => {
        console.table(result);
        this.setState({
          id: result.data.id,
          projectName: result.data.projectName,
          projectDescr: result.data.projectDescription
        });
      });
  }

  //GET ID METHOD
  handleChangeid(i) {
    this.setState({
        projectId: i.target.value
    });
  }

  //GET ISBN METHOD
  handleChangename(n) {
    this.setState({
        projectName: n.target.value
    });
  }

  //GET NAME METHOD
  handleChangedscr(d) {
    this.setState({
        projectDescr: d.target.value
    });
  }

  //ON SUBMIT FORM METHOD
  onSubmit(i) {
    i.preventDefault();

    const update = {
        id: this.state.id,
        projectName: this.state.projectName,
        projectDescription: this.state.projectDescr
    };
    axios.put("http://localhost:8081/test/api/v1/project/" + this.props.match.params.id, update).then(res => {
      if (res.status === 200) {
        alert("Project update successfully.");
        window.location.reload();
      }
    });

    this.routeProjectList();
  }

  //BACK BOOK LIST
  routeProjectList() {
    let path = `/`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="col-sm-12">
        <div className="container">
          <br />
          <button
            className="btn btn-primary"
            type="submit"
            onClick={this.routeProjectList}
          >
            <i className="fa fa-arrow-circle-left  "> Back</i>
          </button>
          <h3 align="center">EDIT-PROJECTS</h3>
        </div>

        <Formik>
          <Form className="container" onSubmit={this.onSubmit}>
            {/* <fieldset>
              <label>Book Id</label>
              <Field
                className="form-control"
                type="text"
                name="id"
                value={this.state.id}
                onChange={this.handleChangeid}
                placeholder="Boook Id Here"
                disabled
              />
            </fieldset> */}
            <fieldset className="form-group">
              <label> Project Name</label>
              <Field
                className="form-control"
                type="text"
                name="NAME"
                value={this.state.projectName}
                onChange={this.handleChangename}
                placeholder=""
              />
            </fieldset>
            <fieldset className="form-group">
                  <label>Project Description</label>
                  <Field
                    className="form-control"
                    type="textarea"
                    name="description"
                    value={this.state.projectDescr}
                    onChange={this.handleChangedscr}
                    placeholder=""
                  />
                </fieldset>
            <button
              className="btn btn-primary"
              value="Submit"
              type="submit"
              align="center"
            >
              <i className="fa fa-plus"> Update</i>
            </button>
            &nbsp;
            <button
              className="btn btn-primary"
              type="reset"
              onClick={this.routeListBook}
              align="center"
            >
              <i className="fa fa-location-arrow"> cancel</i>
            </button>
            <br />
            &nbsp; &nbsp; &nbsp;
          </Form>
        </Formik>
      </div>
    );
  }
}

export default EditProject;
