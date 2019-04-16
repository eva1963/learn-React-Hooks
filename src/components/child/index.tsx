import React from "react";

interface ChildProps {
    num: number;
    plus: () => void;
}

interface ChildStates {
    num: number;
};

export class Child extends React.Component<{}, {}> {

    componentDidMount() {
        console.log("componentDidMount====>");
    }

    // static getDerivedStateFromProps(nextProps: ChildProps, prevstate: ChildStates) {
    //     console.log("子组件的getDerived===>", nextProps, prevstate);
    //     if (nextProps.num !== prevstate.num) {
    //         return {
    //             num: nextProps.num
    //         }
    //     }
    //     return null;
    // }

    componentWillReceiveProps(props: ChildProps) {
        console.log("componentWillReceiveProps====>");
        // if (props.num !== this.state.num) {
        //     this.setState({
        //         num: props.num
        //     })
        //     //         return {
        //     //             num: nextProps.num
        //     //         }
        //         }
    }


    componentDidUpdate() {
        console.log("componentDidUpdate====>");
    }
    
    render() {
        return (
            <div>
               child
            </div>
        );
    }
}