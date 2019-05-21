import * as React from "react";

interface States {
  count: number;
}
export class Example1 extends React.Component<{}, States> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidUpdate() {
    console.log("执行一次didUpdate!!");
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
