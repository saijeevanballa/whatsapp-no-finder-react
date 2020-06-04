import React, { Component } from "react";
import axios from "axios";
import { BASE_URL } from "../api-middleware";
import { formatLikes } from "../utils/utils";
import { find, create } from "../store/store";
import Navbar from "./Navbar";
import {
  like,
  dislike,
  view,
  save,
  female,
  male,
  whatsapp,
  newEye,
  toggle,
  likeBlue,
  dislikeRed,
  search
} from "../utils/svg";
import "../index.css";

export default class Public extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
      number: "",
      notification: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(`${BASE_URL}`).then(response => {
      this.setState({ table: response.data || [] });
    });
  }

  handlerLike(id) {
    axios.get(`${BASE_URL}/${id}/like`).then(response => {});
    this.setState({
      table: this.state.table.map(obj =>
        obj._id == id ? { ...obj, likes: obj.likes + 1 } : obj
      )
    });
  }

  handlerDisLike(id) {
    axios.get(`${BASE_URL}/${id}/dislike`).then(response => {});
    this.setState({
      table: this.state.table.map(obj =>
        obj._id == id ? { ...obj, disLikes: obj.disLikes + 1 } : obj
      )
    });
  }

  handlerView(id, number) {
    axios.get(`${BASE_URL}/${id}/view`).then(response => {});
    this.setState({
      table: this.state.table.map(obj =>
        obj._id == id ? { ...obj, views: obj.views + 1 } : obj
      )
    });
    window.open(`https://api.whatsapp.com/send?phone=91${number}`, "_blank");
  }

  handlerSave(number) {
    let loadData = find("numbers");
    let updatedArray = [];
    if (loadData.length) {
      updatedArray = loadData.includes(number)
        ? loadData
        : loadData.concat([number]);
      if (!loadData.includes(number)) {
        this.setState({ notification: Number(this.state.notification) + 1 });
      }
    } else {
      updatedArray = [number];
      this.setState({ notification: 1 });
    }
    create("numbers", updatedArray);
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
    console.log(this.state.number);
    axios
      .get(`${BASE_URL}/?value=${this.state.number}`)
      .then(response => {
        this.setState({ table: response.data || [] });
      })
      .catch(err => console.log(err));
    event.preventDefault();
  }

  render() {
    let tabel = this.state.table.map((val, i) => (
      <div className="m-1" key={val._id}>
        <div className="container d-flex justify-content-center position-sticky">
          <div className="col-xs-12">
            <div className="card w-100">
              <div>
                <div className="dropdown">
                  <button
                    className="btn btn-link button-toggle"
                    type="button"
                    id="gedf-drop1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {toggle}
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="gedf-drop1"
                  >
                    <div className="h6 dropdown-header">Configuration</div>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => this.handlerSave(val.number)}
                    >
                      Save
                    </a>
                    <a className="dropdown-item" href="#">
                      Report
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body text-center">
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  {val.gender == "M" ? male : female}
                  <div className="m-3">
                    <h4>{val.number}</h4>
                    <p className="text-muted mb-0">{val.name}</p>
                  </div>
                </div>
                <button
                  className="btn btn btn-outline-primary btn-sm mt-3 mb-3"
                  onClick={() => this.handlerSave(val.number)}
                >
                  Save
                </button>
                <fieldset disabled>
                  <div className="border-top pt-3">
                    <div className="row d-flex flex-row">
                      <div
                        className="col-4"
                        onClick={() => this.handlerLike(val._id)}
                      >
                        <h6>{formatLikes(val.likes)}</h6>
                        <button
                          type="button"
                          className="btn btn-primary bmd-btn-fab"
                        >
                          {like}
                        </button>
                      </div>
                      <div
                        className="col-4"
                        onClick={() => this.handlerDisLike(val._id)}
                      >
                        <h6>{formatLikes(val.disLikes)}</h6>
                        <button
                          type="button"
                          className="btn btn-danger bmd-btn-fab"
                        >
                          {dislike}
                        </button>
                      </div>
                      <div
                        className="col-4"
                        onClick={() => this.handlerView(val._id, val.number)}
                      >
                        <h6>{formatLikes(val.views)}</h6>
                        <button
                          type="button"
                          className="btn btn-success bmd-btn-fab"
                        >
                          {whatsapp}
                        </button>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <Navbar num={this.state.notification || ""} />
        <div class="bmd-form-group bmd-collapse-inline pull-xs-right m-3">
          <button
            class="btn bmd-btn-icon m-1"
            for="search"
            data-toggle="collapse"
            data-target="#collapse-search"
            aria-expanded="false"
            aria-controls="collapse-search"
            onClick={this.handleSubmit}>
            {search}
          </button>
          <span id="collapse-search" class="collapse">
            <input
              class="form-control m-1 mr-5"
              type="text"
              id="search"
              placeholder="Search Number..."
              value={this.state.number}
              onChange={this.handleChange}
            />
          </span>
        </div>
        {tabel.length ? (
          <div className="d-flex flex-row flex-wrap m-2">{tabel}</div>
        ) : (
          <p className="d-flex justify-content-center mt-5 text-danger">
            No Data Found
          </p>
        )}
      </div>
    );
  }
}
