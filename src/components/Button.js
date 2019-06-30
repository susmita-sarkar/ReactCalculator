import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div>
        <button val={this.props.label} onClick={this.props.onKey}>
          {this.props.label}
        </button>
      </div>
    );
  }
}
export default Button;
