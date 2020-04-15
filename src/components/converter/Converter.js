import React from "react";
import axios from "axios";
import "./Converter.css";

const eurovals = [
  { currency: "USD", convertval: 1.09322 },
  { currency: "GBP", convertval: 0.87345 },
  { currency: "YEN", convertval: 117.431 },
  { currency: "CHF", convertval: 1.05378 },
];

class Converter extends React.Component {
  state = {
    value: "",
    currencyIdFrom: "EUR",
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

  newCurrencyConvert = (fromId, toId) => {
    axios
      .post(
        "https://igfcc7aebk.execute-api.sa-east-1.amazonaws.com/default/money-conversion-interview-exercise-api",
        {
          headers: {
            accept: "application/json",
          },
          body: {
            from: fromId,
            to: toId,
          },
        }
      )
      .then((response) => {
        this.setState({ multiplier: response.data.multiplier });
        console.log(this.state.multiplier);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  currencyConvert = (event) => {
    //prevent automatic refresh with submit
    event.preventDefault();

    let val = parseFloat(this.state.value).toFixed(2);
    let currencyIdTo = this.state.currencyIdTo;
    let currencyIdFrom = this.state.currencyIdFrom;
    let datenow = new Date();

    //call function to get multiplier from api
    //this.newCurrencyConvert(currencyIdFrom, currencyIdTo);

    for (let i = 0; i < eurovals.length; i++) {
      if (eurovals[i].currency === currencyIdTo) {
        let answer = eurovals[i].convertval * val;
        this.setState({ conversion: answer.toFixed(2) });
        this.setState({ timestamp: datenow.toUTCString() });

        //call function to add conversion to history array
        this.props.addItemToHistory({
          timestamp: datenow.toUTCString(),
          fromId: currencyIdFrom,
          toId: currencyIdTo,
          value: val,
          conversion: answer.toFixed(2),
        });
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
          <div className="item-1">
            <h3>Enter a value to begin</h3>
          </div>
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
            className="form-item text-input"
          />
          <select
            id="currency-from"
            onChange={this.handleCurrencyFrom}
            className="form-item"
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="YEN">YEN</option>
            <option value="CHF">CHF</option>
          </select>
          <select
            id="currency-to"
            onChange={this.handleCurrencyChange}
            className="form-item"
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="YEN">YEN</option>
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
