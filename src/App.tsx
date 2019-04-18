import * as React from "react";
import "./App.scss";
import { Home } from "./components/home";
import { Child } from "./components/child";
import { NewChild } from "./components/NewChild";

interface Appstates {
  num: number;
}
class App extends React.Component<{}, Appstates> {
  constructor(props: any) {
    super(props);
    this.state = {
      num: 0
    };
  }

  // componentWillMount() {
  //   console.log("componentWillMount");
  // }

  // UNSAFE_componentWillMount() {
  //   console.log("unsafe====>");
  // }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        num: this.state.num + 1
      });
    }, 1000);
  }

  plus = () => {
    // this.setState({
    //   num: this.state.num + 1
    // },() => {console.log(this.state.num);
    // })
    console.log("plus");
  };

  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.num}</h1> */}
        <Home num={this.state.num} plus={this.plus} />
        {/* <Child/> */}
        {/* <NewChild/> */}

        {/* <button onClick={this.plus}>plus 1</button> */}
      </div>
    );
  }
}

export default App;
