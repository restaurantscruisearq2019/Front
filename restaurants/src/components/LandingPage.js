import React from "react";
import Carousel from "./Carousel";
import ScheduleCard from "./ScheduleCard";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="ui grid container">
        <div className="row">
          <Carousel />
        </div>
        <div className="row">
          <div className="eight wide column">
              <ScheduleCard />
          </div>
          <div className="eight wide column">
            <div className="ui items">
              <div className="item">
                <a>
                  <img width="99%" src="https://images.unsplash.com/photo-1457904297262-2dcf97b883ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=877&q=80"/>
                </a>
                <div className="content">
                  <div className="header">
                    <i className="calendar alternate icon"></i>
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
