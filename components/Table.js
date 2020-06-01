import React, { Component } from "react";
import "../index.css";

const eye = (
  <svg
    className="bi bi-eye"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"
    />
    <path
      fill-rule="evenodd"
      d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
    />
  </svg>
);

const del = (
  <svg
    className="bi bi-trash"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
    <path
      fill-rule="evenodd"
      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
    />
  </svg>
);

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.handleUrl = this.handleUrl.bind(this);
  }

  handleUrl(event) {
    console.log(event)
    window.open(
        `https://api.whatsapp.com/send?phone=91${event}`,
        "_blank"
      )
  }

  render() {
    let tabel = this.props.table.map((val, i) => (
      <tr key={i}>
        <th scope="row">{i + 1}</th>
        <td>{val}</td>
        <td onClick={()=>this.handleUrl(val)}><a>{eye}</a></td>
        <td onClick={() => {
        this.props.DeleteNum(val);
    }}>{del}</td>
      </tr>
    ));

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Numbers</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{tabel}</tbody>
        </table>
      </div>
    );
  }
}
