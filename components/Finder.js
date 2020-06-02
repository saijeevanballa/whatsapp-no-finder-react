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
      allNums: [],
      share: {
        share: false,
        number: null
      },
      form: {
        name: "",
        nameError: "",
        gender: "",
        genderError: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormGenderChange = this.handleFormGenderChange.bind(this);
    this.handleFormNameChange = this.handleFormNameChange.bind(this);
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

  shareNumber(number) {
    this.setState({ share: { share: true, number } });
  }

  handleCancel() {
    this.setState({ share: { share: false, number: null } });
  }

  handleFormSubmit() {
    console.log("sumitted");
  }

  handleFormGenderChange(event) {
    this.setState({ form: { gender: event.target.value } });
  }

  handleFormNameChange() {
    if (!/^[A-Za-z\s]+$/.test(event.target.value)) {
      this.setState({ form: { nameError: "Please entred valid name number" } });
    } else {
      this.setState({ errorMsg: "" });
    }
    this.setState({ form: { name: event.target.value } });
  }

  render() {
    console.log(this.state.share);
    let card =
      !this.state.share.share && !this.state.share.number ? (
        <div className="d-flex row flex-wrap justify-content-center align-self-center">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center">Enter Phone Number</h4>
              <br />
              <form>
                <div>
                  <input
                    className="w-100 text-center"
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
      ) : (
        <div className="d-flex row flex-wrap justify-content-center align-self-center">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">
                share number to Public{" "}
              </h3>
              <br />
              <form>
                <div>
                  <label>Number:</label>
                  <input
                    className="w-100 text-center"
                    type="text"
                    name="Tel"
                    value={this.state.share.number}
                    disabled
                  />
                  <br />
                </div><br />
                <div>
                  <label>Name:</label>
                  <input
                    className="w-100 text-center"
                    type="text"
                    placeholder="Enter User Name"
                    value={this.state.form.name}
                    onChange={this.handleFormNameChange}
                  />
                  <span className="error">{this.state.form.nameError}</span>
                </div> <br />
                <div>
                  <label>Gender:</label>
                  <select
                    className="form-control text-center"
                    value={this.state.form.gender}
                    onChange={this.handleFormGenderChange}
                  >
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                  <span className="error">{this.state.form.genderError}</span>
                  <br />
                </div>
                <br />
                <div className="d-flexnjustify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={this.handleFormSubmit}
                  >
                    submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={this.handleCancel}
                  >
                    cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );

    return (
      <div className="mainDiv">
        <div className="inputDiv">{card}</div>
        <div className="tableDiv">
          {this.state.allNums.length ? (
            <Table
              table={this.state.allNums}
              DeleteNum={val => this.removeNumber(val)}
              sharePublic={val => this.shareNumber(val)}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
