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
        <div className="row">
          <div className="row container-fluid mx-auto">
            <div className="col-4 ">
              <h3 className="text-info font text-center design">
                New Confirmed Cases
              </h3>
            </div>
            <div className="col-4">
              <h3 className="text-danger font text-center design">
                New Death Cases
              </h3>
            </div>
            <div className="col-4">
              <h3 className="text-success font text-center design">
                Recovered in last 24 hours
              </h3>
            </div>
          </div>

          <div className="row container-fluid mx-auto">
            <div className="col-4">
              <h3 className="text-white font text-center design">
                {summary.NewConfirmed}
              </h3>
            </div>
            <div className="col-4">
              <h3 className="text-white font text-center design">
                {summary.NewDeaths}
              </h3>
            </div>
            <div className="col-4">
              <h3 className="text-white font text-center design">
                {summary.NewRecovered}
              </h3>
            </div>
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
          <div className="col-4">
            <h3 className="text-white font text-info text-center design">
              Total Cases
            </h3>
          </div>
          <div className="col-4">
            <h3 className="text-white font text-danger text-center  design">
              Total Deaths
            </h3>
          </div>
          <div className="col-4">
            <h3 className="text-white font text-success text-center text-center design">
              Total Recovered
            </h3>
          </div>
          <div className="row container-fluid mx-auto">
            <div className="col-4">
              <h3 className="text-white font text-center design">
                {summary.TotalConfirmed}
              </h3>
            </div>
            <div className="col-4">
              <h3 className="text-white font text-center design">
                {summary.TotalDeaths}
              </h3>
            </div>
            <div className="col-4">
              <h3 className="text-white font text-center design">
                {summary.TotalRecovered}
              </h3>
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
