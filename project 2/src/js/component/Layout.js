import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      name1: "Spongebob",
      name2: "Mr Krab"
    };
  }

  changeName1(param){
    this.setState({name1: param});
  }
  changeName2(param){
    this.setState({name2: param});
  }

  render(){
    return(
      <div>
        <Header name={this.state.name1}
          inputValue={this.state.name2}
          onInputChange={this.changeName2.bind(this)}/>

          <br/>

        <Header name={this.state.name2}
          inputValue={this.state.name1}
          onInputChange={this.changeName1.bind(this)}/>
        <Footer/>
      </div>
    )
  }
}
