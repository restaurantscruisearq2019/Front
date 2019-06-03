import React from "react";
import Calendar from "react-calendar";
import gql from "graphql-tag";
import apollo from "../api/apollo";

class SchedulePage extends React.Component {
  state = {
    date: new Date(),
    todayInfo: null
  };

  componentWillMount = () => {
    apollo
      .query({
        query: gql`
        {
          getDayInfo
        }       
        `
      })
      .then(data => {
        this.setState({ todayInfo: data.data.getDayInfo });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange = date => {
    this.setState({ date })
  };

  todayInfo = () =>{
    if(this.state.todayInfo !== null){
      if(this.state.todayInfo){
        return(
          <h3 className="ui header">Restaurants Are Open 24/7, nonetheless do not forget they are reserved under breakfast, lunch and dinner hours.</h3>
        )
      }
      return(
        <h1 className="ui header">Restaurants are Closed!</h1>
      )
    }
    return <h1 className="ui header">Wait a moment please...</h1>
  }

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
            {this.todayInfo()}
        </div>
      </div>
    );
  }
}

export default SchedulePage;
