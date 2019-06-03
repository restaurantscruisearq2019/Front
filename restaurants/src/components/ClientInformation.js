import React from "react";
import { Accordion, Icon } from "semantic-ui-react";

class ClientInformation extends React.Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const { breakfast, lunch, dinner } = this.props.info.ClientDailyReservation;

    return (
      <div
        className="ui left aligned centered fluid card"
        style={{ textAlign: "left" }}>
        <div className="content">
          <h1>Reservation</h1>
        </div>
        <Accordion styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}>
            <Icon name="dropdown" />
            Breakfast
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <h4>{`Restaurant: ${breakfast.name}`}</h4>
            <h4>{`Date: ${breakfast.hour}`}</h4>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}>
            <Icon name="dropdown" />
            Lunch{" "}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <h4>{`Restaurant: ${lunch.name}`}</h4>
            <h4>{`Date: ${lunch.hour}`}</h4>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}>
            <Icon name="dropdown" />
            Dinner
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <h4>{`Restaurant: ${dinner.name}`}</h4>
            <h4>{`Date: ${dinner.hour}`}</h4>
          </Accordion.Content>
        </Accordion>
      </div>
    );
  }
}

export default ClientInformation;
