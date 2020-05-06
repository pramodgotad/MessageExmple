import React from "react";
import Alert from "@material-ui/lab/Alert";

class MessageUtility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoHide: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        autoHide: false
      });
    }, 2000);
  }

  render() {
    return (
      <div
        className="App"
        style={this.state.autoHide ? { display: "box" } : { display: "none" }}
      >
        <Alert variant="filled" severity={this.props.errorType}>
          {this.props.message}
        </Alert>
      </div>
    );
  }
}

export default MessageUtility;
