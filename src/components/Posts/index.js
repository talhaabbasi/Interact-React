import React, { Component } from "react";
import Axios from "axios";
const apiUrl = "https://localhost:44395/api/topics";

class index extends Component {
  componentDidMount() {
    Axios.get(apiUrl).then((reselt) => {
      console.log(reselt.data);
    });
  }
  render() {
    return <div>Hello World</div>;
  }
}
export default index;
