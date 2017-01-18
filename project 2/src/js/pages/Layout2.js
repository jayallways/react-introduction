import React from "react";
import ReactDOM from "react-dom";

import Header2 from "../component/Header2"

export default class Layout2 extends React.Component {

  render(){
    return(
      <div>
        <Header2/>

        {this.props.children}

        <footer>this is footer</footer>
      </div>
    )
  }
}
