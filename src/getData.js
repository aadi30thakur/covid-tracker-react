import React, { Component, Fragment } from "react";
import Axios from "axios";
import Dashboard from "./core/Dashboard";
import List from "./core/List";

const API = "https://api.covid19api.com/summary";
class GetData extends Component {
  state = {
    contries: [],
    global: [],
    currentDate: [],
    loading: true,
  };
  async componentDidMount() {
    const res = await Axios.get(API);
    console.log(res);
    this.setState({
      contries: res.data.Countries,
      global: res.data.Global,
      currentDate: res.data.Date,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <h1 className="text-white text-center" id="loadingScreen">
          loading...
        </h1>
      );
    }
    return (
      <Fragment>
        <Dashboard
          summary={this.state.global}
          currentDate={this.state.currentDate}
        ></Dashboard>
        <List countries={this.state.contries} />
      </Fragment>
    );
  }
}

export default GetData;
