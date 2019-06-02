import React from "react";

class StaffInfoPage extends React.Component {
  state = {
    employees: [
      { name: "asdasd", office: "asdsad" },
      { name: "asdasd", office: "asdsad" },
      { name: "asdasd", office: "asdsad" },
      { name: "asdasd", office: "asdsad" },
      { name: "asdasd", office: "asdsad" },
      { name: "asdasd", office: "asdsad" },
      { name: "asdasd", office: "asdsad" },
      { name: "asdasd", office: "asdsad" },
      { name: "asdasd", office: "asdsad" },
      { name: "asdasd", office: "asdsad" }
    ]
  };

  renderList() {
    return this.state.employees.map(employee => {
      return (
        <div className="item">
          <div className="right floated content">
            <div className="ui dropdown">
              <i className="bars icon" />
              <div className="right menu">
                <div className="item">{employee.name}</div>
                <div className="item">{employee.office}</div>
                <div className="item">Delete</div>
              </div>
            </div>
          </div>
          <img alt="" className="ui avatar image" src="default" />
          <div className="content">
            <div className="header">{employee.name}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui middle aligned massive list">{this.renderList()}</div>
    );
  }
}

export default StaffInfoPage;
