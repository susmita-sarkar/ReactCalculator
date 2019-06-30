import React, { Component } from "react";
import Button from "./Button";
class Keypad extends Component {
  render() {
    return (
      <div class="container">
        <div class="btn-group">
          <Button label="1" onKey={this.props.onDisplayChange} />
          <Button label="2" onKey={this.props.onDisplayChange} />
          <Button label="3" onKey={this.props.onDisplayChange} />
          <Button label="4" onKey={this.props.onDisplayChange} />
          <Button label="5" onKey={this.props.onDisplayChange} />
          <Button label="6" onKey={this.props.onDisplayChange} />
          <Button label="7" onKey={this.props.onDisplayChange} />
          <Button label="8" onKey={this.props.onDisplayChange} />
          <Button label="9" onKey={this.props.onDisplayChange} />
          <Button label="0" onKey={this.props.onDisplayChange} />
          <Button label="+" onKey={this.props.onDisplayChange} />
          <Button label="-" onKey={this.props.onDisplayChange} />
          <Button label="*" onKey={this.props.onDisplayChange} />
          <Button label="=" onKey={this.props.onDisplayChange} />
          <Button label="C" onKey={this.props.onDisplayChange} />
        </div>
      </div>
    );
  }
}
export default Keypad;
