import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";

class Dashboard extends Component {
  render() {
    const { summary, currentDate } = this.props;
    return (
      <Fragment>
        <Navbar />
        <h1 className="text-center text-white font h1"> World Data</h1>
        <br />

        <div className="row container-fluid mx-auto">
          <div className="col-md-4">
            <h3 className="text-info font text-center">New Confirmed Cases</h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-danger font text-center">New Death Cases</h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-success font text-center">
              Recovered in last 24 hours
            </h3>
          </div>
        </div>

        <div className="row container-fluid mx-auto">
          <div className="col-md-4">
            <h3 className="text-white font text-center">
              {summary.NewConfirmed}
            </h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-white font text-center">{summary.NewDeaths}</h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-white font text-center">
              {summary.NewRecovered}
            </h3>
          </div>
        </div>
        <br />
        <br />
        <br />
        <p className="text-white font text-center text-warning">Until Now</p>
        <br />
        <br />

        <br />
        <br />
        <div className="row container mx-auto">
          <div className="col-md-4">
            <h3 className="text-white font text-info">Total Cases</h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-white font text-danger">Total Deaths</h3>
          </div>
          <div className="col-md-4">
            <h3 className="text-white font text-success">Total Recovered</h3>
          </div>
          <div className="row container mx-auto">
            <div className="col-md-4">
              <h3 className="text-white font">{summary.TotalConfirmed}</h3>
            </div>
            <div className="col-md-4">
              <h3 className="text-white font">{summary.TotalDeaths}</h3>
            </div>
            <div className="col-md-4">
              <h3 className="text-white font">{summary.TotalRecovered}</h3>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
