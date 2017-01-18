import React from "react";
import ReactDOM from "react-dom";

export default class Detail extends React.Component {
  render(){
    return(
      <div>
        This is Detail ID : {this.props.params.id}
      </div>
    )
  }
}
