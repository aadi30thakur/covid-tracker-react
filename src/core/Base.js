import React, { Component } from "react";

class Base extends Component {
  render() {
    const { summary, currentDate } = this.props;
    return (
      <div>
        <div>{summary.NewConfirmed}</div>
        <div>{currentDate}</div>
      </div>
    );
  }
}
export default Base;
