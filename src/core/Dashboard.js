import React, { Component } from "react";
import Navbar from "./Navbar";

class Dashboard extends Component {
  render() {
    const { summary, currentDate } = this.props;
    return (
      <div>
        <Navbar />
        <div className="text-center text-white">{summary.NewConfirmed}</div>
        <div>{currentDate}</div>
      </div>
    );
  }
}
export default Dashboard;
