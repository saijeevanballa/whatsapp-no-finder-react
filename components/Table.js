import React, { Component } from "react";
import "../index.css";

const phone = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="bi bi-box-arrow-in-right"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" />
  </svg>
);

const sms = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="bi bi-box-arrow-in-right"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M15.454 0c-3.457 0-6.546 2.309-6.546 5.467 0 1.12.403 2.221 1.117 3.073.029 1.001-.558 2.435-1.088 3.479 1.419-.258 3.438-.824 4.352-1.385.772.188 1.514.274 2.213.274 3.865 0 6.498-2.643 6.498-5.442 0-3.173-3.11-5.466-6.546-5.466zm-2.308 6.756c-.207.165-.498.248-.869.248-.318 0-.602-.061-.846-.184l.137-.542c.248.125.497.188.752.188.146 0 .26-.027.342-.083.158-.107.168-.323.012-.446-.074-.058-.201-.118-.385-.179-.549-.183-.822-.468-.822-.858 0-.252.102-.459.303-.622s.471-.244.807-.244c.293 0 .547.049.768.149l-.15.524c-.199-.094-.41-.14-.627-.14-.133 0-.237.026-.312.077-.15.102-.146.285-.018.394.062.053.213.123.455.208.266.094.459.21.584.349.123.139.184.311.184.517-.002.264-.106.479-.315.644zm3.32.201c-.046-1.141-.067-1.915-.067-2.321h-.014c-.069.306-.303 1.064-.699 2.274h-.516c-.238-.834-.59-2.273-.59-2.273h-.008l-.102 2.321h-.615l.184-2.875h.895l.508 1.983.613-1.983h.906l.154 2.875h-.649zm2.782-.188c-.209.167-.505.251-.879.251-.304 0-.59-.054-.863-.19l.145-.574c.24.123.486.195.761.195.143 0 .255-.027.333-.081.151-.102.157-.305.012-.42-.073-.057-.2-.116-.379-.177-.555-.184-.836-.477-.836-.872 0-.255.105-.469.311-.634.203-.165.478-.248.815-.248.294 0 .554.05.774.15l.012.006-.158.556c-.202-.095-.404-.147-.637-.147-.129 0-.232.025-.305.074-.141.096-.139.267-.016.369.061.051.212.121.449.205.268.094.466.213.59.353.125.142.189.318.189.527 0 .268-.107.489-.318.657zm-7.248 6.548v2.683h-8v-8h3.414c-.428-1.06-.552-2.027-.478-3h-2.936c-1.104 0-2 .896-2 2v15c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2v-9.484c-.509.305-1.432.624-2 .801zm-6 7.683h-2v-1h2v1zm0-2h-2v-1h2v1zm3 2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 2h-2v-1h2v1zm0-2h-2v-1h2v1z" />
  </svg>
);

const whatsapp = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="bi bi-box-arrow-in-right"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const share = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="bi bi-box-arrow-in-right"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z" />
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
      fillRule="evenodd"
      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
    />
  </svg>
);

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
    this.setState({number})
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
            class="modal"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Share To Public Numbers
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  Notice: This {this.state.number} will visible to all whatsapp hub users.
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
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
