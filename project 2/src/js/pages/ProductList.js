import React from "react";
import ReactDOM from "react-dom";

import Item from "../component/Item";

export default class ProductList extends React.Component {

  render(){
    var productList = [
      {id:"12", name:"Mobil"},
      {id:"13", name:"Mobil"},
      {id:"14", name:"Mobil"},
      {id:"15", name:"Mobil"},
        {id:"12", name:"Mobil"},
        {id:"13", name:"Mobil"},
        {id:"14", name:"Mobil"},
        {id:"15", name:"Mobil"},
          {id:"12", name:"Mobil"},
          {id:"13", name:"Mobil"},
          {id:"14", name:"Mobil"},
          {id:"15", name:"Mobil"},
            {id:"12", name:"Mobil"},
            {id:"13", name:"Mobil"},
            {id:"14", name:"Mobil"},
            {id:"15", name:"Mobil"},
              {id:"12", name:"Mobil"},
              {id:"13", name:"Mobil"},
              {id:"14", name:"Mobil"},
              {id:"15", name:"Mobil"},
                {id:"12", name:"Mobil"},
                {id:"13", name:"Mobil"},
                {id:"14", name:"Mobil"},
                {id:"15", name:"Mobil"},
    ].map( (obj) =>
      <Item key={obj.id} namaproduk={obj.name} id={obj.id}></Item>
    );

    return(
      <div>
        {productList}
      </div>
    )
  }
}
