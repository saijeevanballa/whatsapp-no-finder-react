import React, { Component } from "react";
import { find, create } from "../store/store";
import Table from "./Table";
import "../index.css";
const numbers = /^[0-9]+$/;

export default class Finder extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      errorMsg: "",
      allNums: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    console.log("hello");
    let loadData = find("numbers");
    if (loadData) {
      this.setState({ allNums: loadData });
    } else {
      create("numbers", this.state.allNums);
    }
  }

  handleChange(event) {
    if (isNaN(event.target.value)) {
      this.setState({ errorMsg: "Please entred valid number" });
    } else {
      this.setState({ errorMsg: "" });
    }
    this.setState({ number: event.target.value });
  }

  handleUpdateAndStore() {
    this.state.allNums.push(this.state.number);
    this.setState({ allNums: this.state.allNums });
    create("numbers", this.state.allNums);
  }

  handleSubmit(event) {
    if (isNaN(this.state.number) || this.state.number == "") {
      alert("Please entred valid number " + this.state.number);
    } else if (this.state.number.length != 10) {
      alert("Entred phone number must be 10 digits " + this.state.number);
    } else {
      alert("Entred Number: " + this.state.number);
      if (!this.state.allNums.includes(this.state.number)) {
        this.handleUpdateAndStore();
      }
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

  removeNumber(number) {
    let index = this.state.allNums.indexOf(number);
    this.state.allNums.splice(index, 1);
    create("numbers", this.state.allNums);
    this.setState({ allNums: this.state.allNums });
  }

  render() {
    return (
      <div className="mainDiv">
        <div className="inputDiv">
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
        <div className="tableDiv">
          {this.state.allNums.length ? (
            <Table
              table={this.state.allNums}
              DeleteNum={val => this.removeNumber(val)}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
