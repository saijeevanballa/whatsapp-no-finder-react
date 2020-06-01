import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../index.css";
const numbers = /^[0-9]+$/;

export default class Finder extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      errorMsg: "",
      allNums:[]

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount(){
    console.log("hello")
  }

  handleChange(event) {
    if (isNaN(event.target.value)) {
      this.setState({ errorMsg: "Please entred valid number" });
    } else {
      this.setState({ errorMsg: "" });
    }
    this.setState({ number: event.target.value });
  }

  handleSubmit(event) {
    if (isNaN(this.state.number) || this.state.number == "") {
      alert("Please entred valid number " + this.state.number);
    } else if (this.state.number.length != 10) {
      alert("Entred phone number must be 10 digits " + this.state.number);
    } else {
      alert("Entred Number: " + this.state.number);
      window.open(
        `https://api.whatsapp.com/send?phone=91${this.state.number}`,
        "_blank"
      );
    }
    event.preventDefault();
  }

  handleReset(event) {
    this.setState({ number: "", errorMsg: "" });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="main">
          <div className="d-flex row flex-wrap justify-content-center align-self-center">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Enter Phone Number</h4>
                <br />
                <form>
                  <div>
                    <input
                      className="w-100"
                      type="text"
                      name="Tel"
                      placeholder="Enter 10 digits phone number"
                      value={this.state.number}
                      onChange={this.handleChange}
                    />
                  </div>
                  <span className="error">{this.state.errorMsg}</span>
                  <br />
                  <div className="d-flexnjustify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      onClick={this.handleSubmit}
                    >
                      submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      onClick={this.handleReset}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
