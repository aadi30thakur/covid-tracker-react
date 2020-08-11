import React from "react";
import { Fragment } from "react";
import { Component } from "react";

class List extends Component {
  render() {
    const { countries } = this.props;
    console.log(this.props);
    return (
      <Fragment>
        <div className="table-responsive">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col" className="text-info">
                  Country{" "}
                </th>
                <th scope="col" className="text-warning">
                  New Confirmed Cases
                </th>
                <th scope="col" className="text-warning">
                  Total Confirmed Cases
                </th>
                <th scope="col" className="text-danger">
                  Death in last 24 hours
                </th>
                <th scope="col" className="text-danger">
                  Total deaths till now
                </th>
                <th scope="col" className="text-success">
                  Total recovered in last 24 hours
                </th>
                <th scope="col" className="text-success">
                  Total recovered
                </th>
              </tr>
            </thead>
            <tbody>
              {countries.map((countries) => (
                <tr>
                  <td className="text-info">{countries.Country}</td>
                  <td className="text-warning">{countries.NewConfirmed}</td>
                  <td className="text-warning">{countries.TotalConfirmed}</td>
                  <td className="text-danger">{countries.NewDeaths}</td>
                  <td className="text-danger">{countries.TotalDeaths}</td>
                  <td className="text-success">{countries.NewRecovered}</td>
                  <td className="text-success">{countries.TotalRecovered}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default List;
