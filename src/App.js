import React from "react";
import "./styles.css";
import MessageUtility from "./MessageUtility";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MessageUtility
          message="pramod"
          errorType="error"
          timeDuration="3000"
        />
      </div>
    );
  }
}

export default App;
