import React from "react";
import "./App.css";
import Converter from "./components/converter/Converter";
import History from "./components/history/History";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
    };
  }

  addItemToHistory = (newitem) => {
    let updatedHistory = this.state.history;
    updatedHistory.unshift(newitem);
    this.setState({ history: updatedHistory });
    console.log(this.state.history);
  };

  render() {
    return (
      <div className="App">
        <Converter addItemToHistory={this.addItemToHistory} />
        <History history={this.state.history} />
      </div>
    );
  }
}

export default App;
