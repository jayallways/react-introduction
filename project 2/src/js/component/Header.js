import React from "react";
import ReactDOM from "react-dom";

import Greeting from "./Greeting";

export default class Header extends React.Component {
  changeHandler(e){
    var nameParam = e.target.value;
    this.props.onInputChange(nameParam);
  }

  render(){
    //console.debug(this.props);
    return(
      <div>
        <header>Toko Online</header>
        <Greeting name={this.props.name}/>
        <input type="text" value={this.props.inputValue}
          onChange={this.changeHandler.bind(this)}/>
      </div>
    )
  }
}
