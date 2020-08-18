import React, { Component } from "react";
import Axios from "axios";
const apiUrl = "https://localhost:44395/api/topics";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: "",
    };
  }
  componentDidMount() {
    Axios.get(apiUrl).then((reselt) => {
      this.setState({ posts: reselt.data });
    });
  }
  render() {
    const { posts } = this.state;
    if (posts !== "") {
      return (
        <div>
          {posts.map((post) => (
            <div key={post.TopicId}>
              {post.Name}
              {post.Viewers}
            </div>
          ))}
        </div>
      );
    } else {
      return <div>blank</div>;
    }
  }
}
export default index;
