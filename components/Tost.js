import React, { Component } from "react";

export default class Tost extends Component {
  render() {
    return (
      <div>
        <div
          className="toast fade show fixed-bottom tost"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="mr-auto">Notice</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              className="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="toast-body w-100 p-3">Thanks for using out service.</div>
        </div>
      </div>
    );
  }
}
