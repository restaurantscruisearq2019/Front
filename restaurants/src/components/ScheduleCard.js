import React from "react";

class ScheduleCard extends React.Component {
  state = {
    date: new Date()
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui two column grid">
          <div className="ui column">
            <h1 className="ui header">
              {`${this.state.date}`}
            </h1>
          </div>
          <div className="column">
            <div className="content">
              <h1 className="header">Today's Information</h1>
              <div className="meta">
                <span>Description</span>
              </div>
              <div className="description">
                <p>
                  Restaurants Are Open 24/7, nonetheless do not forget they are reserved under eating hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleCard;
