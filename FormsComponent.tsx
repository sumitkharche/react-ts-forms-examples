import React from "react";

export default class FormsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      gender: "",
      isSameBillingAddress: false,
      state: "Mahaashtra"
    };
  }

  onChangeHandler = e => {
    let { name, type, value, checked } = e.target;
    let data = type === "checkbox" ? checked : value;
    this.setState({
      [name]: data
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={this.state.firstName}
            onChange={this.onChangeHandler}
          />
          <br /> 
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={this.state.lastName}
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          <textarea
            type="textarea"
            placeholder="Enter your address"
            name="address"
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          Is Billing Address Same
          <input
            type="checkbox"
            name="isSameBillingAddress"
            checked={this.state.isSameBillingAddress}
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          Gender :<label>Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.onChangeHandler}
          />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          State:
          <select
            name="state"
            value={this.state.state}
            onChange={this.onChangeHandler}
          >
            <option value="Maharashtra">Maharashtra</option>
            <option value="Gujrat">Gujrat</option>
            <option value="Delhi">Delhi</option>
            <option value="MP">MP</option>
          </select>
        </form>
        <div>
          <h4>
            <strong>Symmary: </strong>
          </h4>
          FirstName: {this.state.firstName}
          <br />
          LastName: {this.state.lastName}
          <br />
          Address: {this.state.address}
          <br />
          Is Billing Address Same:{" "}
          {this.state.isSameBillingAddress ? "true" : "false"}
          <br />
          Gender: {this.state.gender}
          <br />
          State: {this.state.state}          
        </div>

      </div>
    );
  }
}
