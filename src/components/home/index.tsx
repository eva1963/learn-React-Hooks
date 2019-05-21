import * as React from "react";

interface HomeProps {
  num: number;
  plus: () => void;
}

export class Home extends React.Component<HomeProps, {}> {
  static getDerivedStateFromProps(nextProps: any, prevstate: any) {
    console.log("子组件的getDerived===>", nextProps, prevstate);
    if (nextProps.num !== prevstate.num) {
      return {
        num: nextProps.num
      };
    }
    return null;
  }
  state = {
    num: this.props.num,
    plus: this.props.plus
  };

  componentDidMount() {
    console.log(1);
  }

  componentDidUpdate() {
    console.log(2);
  }

  render() {
    return (
      <div>
        <div>{this.state.num}</div>
        <button onClick={this.props.plus}>123 plus 1</button>
      </div>
    );
  }
}
