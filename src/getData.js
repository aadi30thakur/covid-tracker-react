import React, { Component } from "react";
import Axios from "axios";
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
      global: res.data.global,
      currentDate: res.data.currentDate,
      loading: false,
    });
  }

  render() {
    return <div>hello</div>;
  }
}

export default GetData;
