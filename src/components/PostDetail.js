import React, { Component } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postDetail: {},
      isLoaded: false,
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
      )
      .then(result => {
        this.setState({
          isLoaded: true,
          postDetail: result.data
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error: error.message
        });
      });
  }

  render() {
    const { postDetail, error, isLoaded } = this.state;
    if (error) {
      return <div>{error}</div>;
    }
    if (!isLoaded) {
      return <div>Loading.....</div>;
    }
    return (
      <div>
        <h1> Dummy Data Detail from JSONPlaceholder </h1>
        <p>
          <Link to={`/rest-api`}>back to Rest API Home </Link>
        </p>

        <div>
          <h3>
            [{postDetail.id}] : {postDetail.title.toUpperCase()}
          </h3>
          <p>
            <em>"{postDetail.body}"</em>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(PostDetail);
