import * as React from "react";
import { Example1 } from "./class";
import { Example2 } from "./useState";

export default class Wrapper extends React.Component<{}, {}> {
  render() {
    return (
      <>
        {/* <Example1 /> */}
        <Example2 />
      </>
    );
  }
}
