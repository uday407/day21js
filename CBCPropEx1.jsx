import React, { Component } from "react";

export default class CBCPropEx1 extends Component {
  render() {
    console.log(this);

    const { username, age, hobbies, isMarried, sendFun } = this.props;

    return (
      <div>
        <h1>{username}</h1>
        <h2>{age}</h2>

        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>

        <h1>{isMarried ? "Married" : "Not Married"}</h1>

        <button onClick={sendFun}>Click</button>
      </div>
    );
  }
}