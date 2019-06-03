import React from "react";

class StaffInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: props.userInfo.employees
    };
  }

  renderList() {
    return this.state.employees.map(employee => {
      return (
        <div key={employee._id} className="ui fluid blue card">
          <div className="content">
              <div className="center aligned header">{employee.name}</div>
              <div className="center aligned">{employee.office}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div style={{alignSelf:"center"}} className="ui middle aligned centered massive list container">{this.renderList()}</div>
    );
  }
}

export default StaffInfoPage;
