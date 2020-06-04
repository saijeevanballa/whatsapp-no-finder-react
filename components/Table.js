import React, { Component } from "react";
import "../index.css";
import { whatsapp, sms, phone, share, del } from "../utils/svg";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ""
    };
    this.handleUrl = this.handleUrl.bind(this);
    this.handleSms = this.handleSms.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
  }

  handleUrl(number) {
    window.open(`https://api.whatsapp.com/send?phone=91${number}`, "_blank");
  }

  handlePhone(number) {
    window.open(`tel://+91${number}`, "_blank");
  }

  handleSms(number) {
    window.open(`sms://+91${number}`, "_blank");
  }

  handleNumber(number) {
    this.setState({ number });
  }

  render() {
    let tabel = this.props.table.map((val, i) => (
      <tr key={i}>
        <th scope="row">{i + 1}</th>
        <td>{val}</td>
        <td onClick={() => this.handleUrl(val)}>
          <a>{whatsapp}</a>
        </td>
        <td onClick={() => this.handleSms(val)}>
          <a>{sms}</a>
        </td>
        <td onClick={() => this.handlePhone(val)}>
          <a>{phone}</a>
        </td>
        <td
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={() => {
            this.handleNumber(val);
          }}
        >
          {share}
        </td>
        <td
          onClick={() => {
            this.props.DeleteNum(val);
          }}
        >
          {del}
        </td>
      </tr>
    ));

    return (
      <div>
        <div>
          <div
            className="modal"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Share To Public Numbers
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Notice: This number {this.state.number} will visible to all
                  whatsapp hub users.
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      this.props.sharePublic(this.state.number);
                    }}
                    data-dismiss="modal"
                  >
                    Agree
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Numbers</th>
              <th
                data-toggle="tooltip"
                data-placement="top"
                title="Open In whatsapp"
              >
                {whatsapp}
              </th>
              <th
                data-toggle="tooltip"
                data-placement="top"
                title="Open In SMS"
              >
                {sms}
              </th>
              <th
                data-toggle="tooltip"
                data-placement="top"
                title="Open In Phone"
              >
                {phone}
              </th>
              <th
                data-toggle="tooltip"
                data-placement="top"
                title="Share To Public"
              >
                {share}
              </th>
              <th
                data-toggle="tooltip"
                data-placement="top"
                title="Delete Contact"
              >
                {del}
              </th>
            </tr>
          </thead>
          <tbody>{tabel}</tbody>
        </table>
      </div>
    );
  }
}
