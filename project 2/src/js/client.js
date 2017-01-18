import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Aboutus from "./pages/Aboutus";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Layout2 from "./pages/Layout2";
import ProductList from "./pages/ProductList";

var app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout2}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="productlist" component={ProductList}></Route>
      <Route path="about" component={Aboutus}></Route>
      <Route path="detail/:id" component={Detail}></Route>
    </Route>
  </Router>
, app);
