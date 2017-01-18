import React from "react";
import ReactDOM from "react-dom";

import Nav from "./header/Nav";
import Title from "./header/Title";

export default class Header2 extends React.Component {
  render(){
    return(
      <div>
        <Title/>
        <Nav/>
      </div>
    )
  }
}
