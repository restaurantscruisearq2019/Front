import React from "react";
import Carousel from "./Carousel";
import ScheduleCard from "./ScheduleCard";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="ui two column grid">
        <div className="row">
          <div className="sixteen wide column">
            <Carousel />
          </div>
        </div>
        <div className="row">
          <div className="ui sixteen wide column two column relaxed grid middle aligned content container">
            <div className="column ui segment">
              <ScheduleCard />
            </div>
            <div className="column">
              <div className="ui fluid card">
                <div className="image">
                  <img
                    width="100%"
                    src="https://images.unsplash.com/photo-1457904297262-2dcf97b883ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=877&q=80"
                  />
                </div>
                <div className="content">
                  <div className="ui medium header">
                    <i className="calendar alternate icon" />
                    Check your Reservation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
