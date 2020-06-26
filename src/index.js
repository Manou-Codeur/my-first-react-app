import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Movies from "./components/Movie-component/movies";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import SpecificMovie from "./components/SpecificMovie";
import Customers from "./components/Customers";
import Rental from "./components/Rental";
import NotFound from "./components/Not-found";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <NavBar />

      <div className="routeContainer">
        <Switch>
          <Route path="/movies/:id" component={SpecificMovie} />
          <Route path="/customers" component={Customers} />
          <Route path="/rental" component={Rental} />
          <Route path="/notFound" component={NotFound} />
          <Route path="/movies" component={Movies} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/notFound" />
        </Switch>
      </div>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
