import React from "react";

import "./Converter.css";

const eurovals = [
  { currency: "USD", convertval: 1.09322 },
  { currency: "GBP", convertval: 0.87345 },
  { currency: "JPY", convertval: 117.431 },
  { currency: "CHF", convertval: 1.05378 },
];

class Converter extends React.Component {
  state = {
    value: "",
    currencyIdFrom: null,
    currencyIdTo: null,
    conversion: null,
    timestamp: null,
    history: [],
  };

  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleCurrencyChange = (event) => {
    this.setState({ currencyIdTo: event.target.value });
  };

  handleCurrencyFrom = (event) => {
    this.setState({ currencyIdFrom: event.target.value });
  };

  currencyConvert = (event) => {
    event.preventDefault();
    let val = this.state.value;
    let currencyId = this.state.currencyIdTo;
    for (let i = 0; i < eurovals.length; i++) {
      if (eurovals[i].currency === currencyId) {
        let answer = eurovals[i].convertval * val;
        this.setState({ conversion: answer.toFixed(2) });
        this.setState({ timestamp: Date() });
      }
    }
  };

  render() {
    return (
      <div className="convertor-container">
        {this.state.value && this.state.currencyIdFrom ? (
          <div className="user-input-amount item-1">
            {this.state.value} {this.state.currencyIdFrom} equals
          </div>
        ) : (
          <div className="item-1">Enter a value to begin</div>
        )}
        {this.state.conversion ? (
          <div className="return-value item-2">
            {this.state.conversion} {this.state.currencyIdTo}
          </div>
        ) : (
          <div className="item-2"></div>
        )}

        {this.state.timestamp ? (
          <div className="date-of-conversion item-3">
            {this.state.timestamp}
          </div>
        ) : (
          <div className="item-3"></div>
        )}

        <form className="conversion-form item-4" onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
            className="form-item"
          />
          <select
            id="currency-from"
            onChange={this.handleCurrencyFrom}
            className="form-item"
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="JPY">JPY</option>
            <option value="CHF">CHF</option>
          </select>
          <select
            id="currency-to"
            onChange={this.handleCurrencyChange}
            className="form-item"
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="JPY">JPY</option>
            <option value="CHF">CHF</option>
          </select>
          <input
            type="submit"
            id="convert"
            onClick={this.currencyConvert}
            value="Convert"
            className="form-item"
          />
        </form>
      </div>
    );
  }
}

export default Converter;
