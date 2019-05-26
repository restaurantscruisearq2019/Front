import React from "react";
import Calendar from "react-calendar";

class SchedulePage extends React.Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    const actDate = new Date();
    return(
      <div id="reservationgrid" className="ui stackable grid middle aligned content">
        <div className="three wide column">
          <h2 className="ui header center aligned">
            {`${actDate}`}
          </h2>
        </div>
        <div className="eight wide column">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            minDate={new Date()}
          />
        </div>
        <div className="two wide column center aligned">
            <h1 className="ui header">
              Restaurants are Closed Today.
            </h1>
        </div>
      </div>
    );
  }
}

export default SchedulePage;
