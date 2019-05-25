import React from "react";
import Calendar from "react-calendar";

class ScheduleCard extends React.Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div className="ui segment">
        <div className="ui two column grid">
          <div className="ui column">
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
              minDate={new Date()}
            />
          </div>
          <div className="column">
            <div className="content">
              <h1 className="header">Date</h1>
              <div className="meta">
                <span>Description</span>
              </div>
              <div className="description">
                <p>
                  {this.state.date ? `${this.state.date}` : "Select a Date"}
                </p>
              </div>
              <div className="extra">Additional Details</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleCard;
