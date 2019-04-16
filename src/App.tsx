import React, { Component } from "react";
import "./App.scss";
import { Home } from "./components/home";

interface Appstates {
  num: number;
}
class App extends Component<{},Appstates> {

  constructor(props: any) {
    super(props);
    this.state = {
      num: 0
    }
  }

  // componentWillMount() {
  //   console.log("componentWillMount");
  // }

  // UNSAFE_componentWillMount() {
  //   console.log("unsafe====>");
  // }

  plus = () => {
    this.setState({
      num: this.state.num + 1
    },() => {console.log(this.state.num);
    })
  }

  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.num}</h1> */}
        <Home num={this.state.num}
         plus={this.plus}/>
        {/* <button onClick={this.plus}>plus 1</button> */}
      </div>
    );
  }
}

export default App;
