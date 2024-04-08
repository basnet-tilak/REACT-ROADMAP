import React from "react";

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Kshatish",
      lastName: "Basnet",
      address: "Nepal",
    };
  }
  updateEmployee() {
    this.setState({
      firstName: "Devil",
      lastName: "Basnet",
      address: "Bardiya Nepal",
    });
  }
  render() {
    return (
      <div>
        <h3>Employee Details</h3>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.address}</p>
        <button onClick={() => this.updateEmployee()}> Update Employee</button>
      </div>
    );
  }
}
export default Employee;
