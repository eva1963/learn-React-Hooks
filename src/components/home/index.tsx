import * as React from "react";

interface HomeProps {
  num: number;
  plus: () => void;
}

interface HomeStates extends HomeProps {}

export class Home extends React.Component<HomeProps, HomeStates> {
  public static getDerivedStateFromProps(
    nextProps: any,
    prevstate: HomeStates
  ) {
    console.log("子组件的getDerived===>", nextProps, prevstate);
    if (nextProps.num !== prevstate.num) {
      return {
        num: nextProps.num
      };
    }
    return null;
  }
  public state = {
    num: this.props.num,
    plus: this.props.plus
  };

  public componentDidMount() {
    console.log(1);
  }

  public componentDidUpdate() {
    console.log(2);
  }

  public render() {
    return (
      <div>
        <div>{this.state.num}</div>
        <button onClick={this.props.plus}>123 plus 1</button>
      </div>
    );
  }
}
