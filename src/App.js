import React, { Component } from "react";
import axios from "axios";
const API = "https://api.covid19api.com/summary";
// const DEFAULT_QUERY = "redux";

class App extends Component {
  state = {
    contries: [],
    global: [],
    currentDate: [],
    loading: true,
  };

  async componentDidMount() {
    const response = await axios.get(API);
    console.log(response);
    this.setState({
      countries: response.data.Countries,
      global: response.data.global,
      currentDate: response.data.currentDate,
      loading: false,
    });
  }
  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }
    return <div>hello</div>;
  }
}
export default App;
