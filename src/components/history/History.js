import React from "react";
import "./History.css";

class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="history-container">
        <h3>History</h3>
        {this.props.history.map((item) => (
          <div key={item.timestamp} className="history-item">
            <h6>{item.timestamp}</h6>
            <h5>
              {item.value} {item.fromId} was {item.conversion} {item.toId}
            </h5>
          </div>
        ))}
      </div>
    );
  }
}

export default History;
