import React, { Component, createRef } from "react";
const axios = require("axios");
import { find, create } from "../store/store";
import Table from "./Table";
import "../index.css";
import { BASE_URL } from "../api-middleware";

// const numbers = /^[0-9]+$/;

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
    this.inputRef = createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormGenderChange = this.handleFormGenderChange.bind(this);
    this.handleFormNameChange = this.handleFormNameChange.bind(this);
  }

  componentDidMount() {
    let loadData = find("numbers");
    if (loadData) {
      this.setState({ allNums: loadData });
    } else {
      create("numbers", this.state.allNums);
    }
  }

  handleChange(event) {
    let loadData = find("numbers");
    if (isNaN(event.target.value)) {
      this.setState({ errorMsg: "Please entred valid number" });
    } else if (event.target.value.length != 10) {
      this.setState({ errorMsg: "Entred phone number must be 10 digits" });
    } else {
      this.setState({ errorMsg: "" });
    }
    let filteredNum = loadData.filter(val => val.includes(event.target.value));
    this.setState({ number: event.target.value, allNums: filteredNum });
  }

  handleUpdateAndStore() {
    let loadData = find("numbers");
    console.log(loadData, [this.state.number]);
    this.state.allNums = loadData.concat([this.state.number]);
    this.setState({ allNums: this.state.allNums });
    create("numbers", this.state.allNums);
  }

  handleSubmit(event) {
    if (isNaN(this.state.number) || this.state.number == "") {
      this.inputRef.current.focus();
      alert("Please entred valid number " + this.state.number);
    } else if (this.state.number.length != 10) {
      alert("Entred phone number must be 10 digits " + this.state.number);
    } else {
      let loadData = find("numbers");
      alert("Entred Number: " + this.state.number);
      if (!loadData.includes(this.state.number)) {
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
    let loadData = find("numbers");
    this.setState({ number: "", errorMsg: "", allNums: loadData });
    event.preventDefault();
  }

  removeNumber(number) {
    let index = this.state.allNums.indexOf(number);
    this.state.allNums.splice(index, 1);
    create("numbers", this.state.allNums);
    this.setState({ allNums: this.state.allNums });
  }

  shareNumber(number) {
    this.setState({
      share: { share: true, number: number },
      form: {
        name: "",
        nameError: "",
        gender: "",
        genderError: ""
      }
    });
  }

  handleCancel() {
    this.setState({ share: { share: false, number: null } });
  }

  handleFormSubmit() {
    let form = this.state.form;
    if (
      form.gender != "" &&
      form.name != "" &&
      form.genderError == "" &&
      form.nameError == ""
    ) {
      axios
        .post(`${BASE_URL}`, {
          ...form,
          number: this.state.share.number
        })
        .then(function(response) {});
      this.setState({
        share: { share: false, number: null },
        form: {
          name: "",
          nameError: "",
          gender: "",
          genderError: ""
        }
      });
    } else {
      if (form.gender == "") {
        form = { ...form, genderError: "Please Select Gender" };
      }
      if (form.name == "") {
        form = { ...form, nameError: "Please entred valid name number" };
      }
      alert("Plese enter mandatory fields.");
      this.setState({ form: { ...form } });
    }
  }

  handleFormGenderChange(event) {
    let form = this.state.form;
    if (event.target.value == "") {
      form = { ...form, genderError: "Please Select Gender" };
    } else {
      form = { ...form, genderError: "" };
    }
    this.setState({ form: { ...form, gender: event.target.value } });
  }

  handleFormNameChange(event) {
    let form = this.state.form;
    if (!/^[A-Za-z\s]+$/.test(event.target.value)) {
      form = { ...form, nameError: "Please entred valid name number" };
    } else {
      form = { ...form, nameError: "" };
    }
    this.setState({ form: { ...form, name: event.target.value } });
  }

  render() {
    let card =
      !this.state.share.share && !this.state.share.number ? (
        <div className="d-flex row flex-wrap justify-content-center align-self-center">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center">Enter Phone Number</h4>
              <br />
              <form>
                <div className="form-group">
                  <label className="bmd-label-floating">Number</label>
                  <input
                    ref={this.inputRef}
                    className="form-control text-center"
                    type="text"
                    name="Tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={this.state.number}
                    onChange={this.handleChange}
                  />
                  <span className="error">{this.state.errorMsg}</span>
                </div>

                <br />
                <div className="d-flexnjustify-content-center">
                  {this.state.number &&
                  this.state.allNums.includes(this.state.number) ? (
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-raised btn-block"
                      onClick={this.handleSubmit}
                      disabled
                    >
                      Open Whatsapp
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-raised btn-block"
                      onClick={this.handleSubmit}
                    >
                      Open Whatsapp
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-raised btn-block"
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
                Share To Pubilc Numbers
              </h3>
              <br />
              <form>
                <div className="form-group">
                  <label className="bmd-label-floating">Number</label>
                  <input
                    className="form-control text-center"
                    type="text"
                    name="Tel"
                    value={this.state.share.number}
                    disabled
                  />
                </div>
                <br />
                <div className="form-group">
                  <label className="bmd-label-floating">Name</label>
                  <input
                    className="w-100 form-control text-center"
                    type="text"
                    value={this.state.form.name}
                    onChange={this.handleFormNameChange}
                  />
                  <span className="error">{this.state.form.nameError}</span>
                </div>
                <br />
                <div className="form-group">
                  <label className="bmd-label-floating">Gender</label>
                  <select
                    className="form-control"
                    value={this.state.form.gender}
                    onChange={this.handleFormGenderChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                  <span className="error">{this.state.form.genderError}</span>
                </div>

                <br />
                <br />
                <div className="d-flexnjustify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-outline-primary btn-raised btn-block"
                    onClick={this.handleFormSubmit}
                  >
                    submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-outline-primary btn-raised btn-block"
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
      <div className="mainDiv mt-3">
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
