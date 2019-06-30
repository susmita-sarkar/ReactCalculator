import React, { Component } from "react";
class Display extends Component {
  render() {
    return (
      <div id="s">
        <p>{this.props.show}</p>
      </div>
    );
  }
}
export default Display;
