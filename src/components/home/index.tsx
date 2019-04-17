import React from "react";

interface HomeProps {
    num: number;
    plus: () => void;
}

interface HomeStates extends HomeProps {};

export class Home extends React.Component<HomeProps, HomeStates> {
    state = {
        num: this.props.num,
        plus: this.props.plus
    }

    componentDidMount() {
        console.log(1);
    }

    static getDerivedStateFromProps(nextProps: HomeProps, prevstate: HomeStates) {
        console.log("子组件的getDerived===>", nextProps, prevstate);
        if (nextProps.num !== prevstate.num) {
            return {
                num: nextProps.num
            }
        }
        return null;
    }


    componentDidUpdate() {
        console.log(2);
    }

    render() {
        return (
            <div>
                <div>{this.state.num}</div>
                <button onClick={this.props.plus}>
                1
                
                
                plus 1
                </button>
            </div>
        );
    }
}