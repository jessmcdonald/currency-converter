import React from "react";
import "./History.css";

class History extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { description: "walk dog", checked: false },
        { description: "bake bread", checked: false },
        { description: "clean kitchen", checked: true },
      ],
      showModal: false,
      selectedItem: null,
    };
  }

  render() {
    return (
      <div className="history-container">
        <h3>History</h3>
      </div>
    );
  }
}

export default History;
