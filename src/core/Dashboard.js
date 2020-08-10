import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
class Dashboard extends Component {
  render() {
    const { summary, currentDate } = this.props;
    return (
      <Fragment>
        <Navbar />
        <h1 className="text-center text-white font h1"> World data</h1>
        <div className="row container mx-auto">
          <div className="col-md-4">
            <h3 className="text-info font">New Confirmed Cases</h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-danger font">New Death Cases</h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-success font">Recovered in last 24 hours</h3>
          </div>
          {/* <div className="col-md-4">
            <h3 className="text-white font">Total Confirmed Cases</h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-white font">Total Deaths</h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-white font">Total Recovered</h3>
          </div> */}
        </div>

        <div className="row container mx-auto">
          <div className="col-md-4">
            <h3 className="text-white font">{summary.NewConfirmed}</h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-white font">{summary.NewDeaths}</h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-white font">{summary.NewRecovered}</h3>
          </div>
          {/* <div className="col-md-4">
            <h3 className="text-white font">{summary.TotalConfirmed}</h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-white font">{summary.TotalDeaths}</h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-white font">{summary.TotalRecovered}</h3>
          </div> */}
        </div>
        <h1 className="text-white font text-center h2">
          dated :{" "}
          <span className="text-warning">
            {" "}
            {new Date(currentDate).toDateString()}
          </span>
        </h1>
      </Fragment>
    );
  }
}
export default Dashboard;
