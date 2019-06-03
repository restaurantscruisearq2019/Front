import React from "react";
import gql from "graphql-tag";
import apollo from "../api/apollo";

class ScheduleCard extends React.Component {
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

  todayInfo = () =>{
    if(this.state.todayInfo !== null){
      if(this.state.todayInfo){
        return(
          <p>Restaurants Are Open 24/7, nonetheless do not forget they are reserved under breakfast, lunch and dinner hours.</p>
        )
      }
      return(
        <p>Restaurants are Closed!</p>
      )
    }
    return <h4>Wait a moment please...</h4>
  }

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
                {this.todayInfo()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleCard;
