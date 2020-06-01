import React, { Component } from "react";

export default class Tost extends Component {
  render() {
    return (
      <div>
        <div
          class="toast fade show fixed-bottom tost"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <strong class="mr-auto">Notice</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              class="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body w-100 p-3">Thanks for using out service.</div>
        </div>
      </div>
    );
  }
}
