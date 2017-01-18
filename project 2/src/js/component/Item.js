import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";

export default class Item extends React.Component {
  render(){
    return(
      <div class="col-md-4 col-sm-3">
        <h4>{this.props.namaproduk}</h4>
        <p>Lorem Ipsum blablabla - {this.props.id}</p>
        <Link to={`/detail/${this.props.id}`}>
          <button class="btn">Detail</button>
        </Link>
      </div>
    )
  }
}
