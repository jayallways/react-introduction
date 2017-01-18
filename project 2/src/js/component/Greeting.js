import React from "react";
import ReactDOM from "react-dom";

export default class Greeting extends React.Component {
  render(){
    return(
      <div>
        Halo, {this.props.name}
      </div>
    )
  }
}
