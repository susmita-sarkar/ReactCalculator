import React, { Component } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { operations: [] };
  }
  handlePress = event => {
    const e = event.target.getAttribute("val");
    console.log(this.state.operations);
    switch (e) {
      case "1":
        const newarr1 = this.state.operations.concat("1");
        this.setState({ operations: newarr1 });
        break;
      case "2":
        const newarr2 = this.state.operations.concat("2");
        this.setState({ operations: newarr2 });
        break;
      case "3":
        const newarr3 = this.state.operations.concat("3");
        this.setState({ operations: newarr3 });
        break;
      case "4":
        const newarr4 = this.state.operations.concat("4");
        this.setState({ operations: newarr4 });
        break;
      case "5":
        const newarr5 = this.state.operations.concat("5");
        this.setState({ operations: newarr5 });
        break;
      case "6":
        const newarr6 = this.state.operations.concat("6");
        this.setState({ operations: newarr6 });
        break;
      case "7":
        const newarr7 = this.state.operations.concat("7");
        this.setState({ operations: newarr7 });
        break;
      case "8":
        const newarr8 = this.state.operations.concat("8");
        this.setState({ operations: newarr8 });
        break;
      case "9":
        const newarr9 = this.state.operations.concat("9");
        this.setState({ operations: newarr9 });
        break;
      case "0":
        const newarr0 = this.state.operations.concat("0");
        this.setState({ operations: newarr0 });
        break;
      case "+":
        const newarr_1 = this.state.operations.concat("+");
        this.setState({ operations: newarr_1 });
        break;
      case "-":
        const newarr_2 = this.state.operations.concat("-");
        this.setState({ operations: newarr_2 });
        break;
      case "*":
        const newarr_3 = this.state.operations.concat("*");
        this.setState({ operations: newarr_3 });
        break;
      case "=":
        let result = this.state.operations.join("");
        if (result != null) {
          result = eval(result);
          //result=math.format(result,);
          console.log(result);
        }
        this.setState({ operations: [result] });
        break;
      case "C":
        this.setState({ operations: [] });
        break;
      default:
        console.log("Wrong Input");
    }
  };

  render() {
    return (
      <div>
        <Display show={this.state.operations.join("")} />
        <Keypad onDisplayChange={this.handlePress} />
      </div>
    );
  }
}

export default Calculator;
