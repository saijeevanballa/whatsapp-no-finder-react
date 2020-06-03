import React, { Component } from "react";
import axios from "axios";
import { BASE_URL } from "../api-middleware";
import { formatLikes } from "../utils/utils";
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
  toggle
} from "../utils/svg";
import "../index.css";

export default class Public extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: []
    };
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

  render() {
    let tabel = this.state.table.map((val, i) => (
      <div className="m-1" key={val._id}>
        <div class="container d-flex justify-content-center position-sticky">
          <div class="col-xs-12">
            <div class="card w-100">
              <div>
                <div class="dropdown">
                  <button
                    class="btn btn-link float-right"
                    type="button"
                    id="gedf-drop1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {toggle}
                  </button>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="gedf-drop1"
                  >
                    <div class="h6 dropdown-header">Configuration</div>
                    <a class="dropdown-item" href="#">
                      Save
                    </a>
                    <a class="dropdown-item" href="#">
                      share
                    </a>
                    <a class="dropdown-item" href="#">
                      Report
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body text-center">
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  {val.gender == "M" ? male : female}
                  <div className="m-3">
                    <h4>{val.number}</h4>
                    <p class="text-muted mb-0">{val.name}</p>
                  </div>
                </div>
                <button class="btn btn-info btn-sm mt-3 mb-3">Save</button>
                <div class="border-top pt-3">
                  <div class="row d-flex flex-row">
                    <div class="col-4">
                      <h6>{formatLikes(val.likes)}</h6>
                      <p>{like}</p>
                    </div>
                    <div class="col-4">
                      <h6>{formatLikes(val.disLikes)}</h6>
                      <p>{dislike}</p>
                    </div>
                    <div class="col-4">
                      <h6>{formatLikes(val.views)}</h6>
                      <p>{newEye}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <Navbar />
        <div className="d-flex flex-row mt-2">
          <input
            className="form-control m-1"
            type="text"
            placeholder="Search Number"
            aria-label="Search"
          />
          <button className="btn btn-primary m-1">Search</button>
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
