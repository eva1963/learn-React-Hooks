import * as React from "react";
import "./App.scss";
import UState from "./components/usetState";

class App extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div className="App">
        {/* useState && useEffect */}
        <UState />
      </div>
    );
  }
}

export default App;
