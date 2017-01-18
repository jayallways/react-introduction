import React from "react";
import ReactDOM from "react-dom";

import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {

  render(){
    return(
      <div>
          <IndexLink to="/">
            <button class="btn btn-primary">Home</button>
          </IndexLink>
          <Link to="productlist">
            <button class="btn btn-primary">Product List</button>
          </Link>
          <Link to="about">
            <button class="btn btn-primary">About Us</button>
          </Link>
        </div>
    )
  }
}
