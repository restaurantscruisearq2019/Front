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
            <div class="ui dropdown">
              <i class="bars icon" />
              <div class="right menu">
                <div class="item">{employee.name}</div>
                <div class="item">{employee.office}</div>
                <div class="item">Delete</div>
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
