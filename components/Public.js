import React, { Component } from "react";

export default class Public extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#!" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
