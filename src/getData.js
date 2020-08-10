import React, { Component } from "react";
import Axios from "axios";
import Dashboard from "./core/Dashboard";
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
      countries: res.data.Countries,
      global: res.data.Global,
      currentDate: res.data.Date,
      loading: false,
    });
  }

  render() {
    return (
      <Dashboard
        summary={this.state.global}
        currentDate={this.state.currentDate}
      ></Dashboard>
    );
  }
}

export default GetData;
