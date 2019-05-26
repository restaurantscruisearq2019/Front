import React from "react";

class ScheduleCard extends React.Component {
  state = {
    date: new Date()
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui sixteen wide column two column relaxed stackable grid middle aligned content container">
          <div className="ui column">
            <h2 className="ui header">
              {`${this.state.date}`}
            </h2>
          </div>
          <div className="column">
            <div className="content">
              <h1 className="ui text container">Today's Information</h1>
              {/* <div className="meta">
                <span>Description</span>
              </div> */}
              <div className="description">
                <p>
                  Restaurants Are Open 24/7, nonetheless do not forget they are reserved
                   under breakfast, lunch and dinner hours.
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
