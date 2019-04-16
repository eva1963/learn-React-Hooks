import React from "react";

export class NewChild extends React.Component<{}, {}> {

    componentDidMount() {
        console.log("componentDidMount====>");
    }

    static getDerivedStateFromProps(nextProps: any, prevstate: any) {
        console.log("子组件的getDerived===>", nextProps, prevstate);
        if (nextProps.num !== prevstate.num) {
            return {
                num: nextProps.num
            }
        }
        return null;
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