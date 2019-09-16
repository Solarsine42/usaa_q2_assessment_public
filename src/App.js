import React from "react";
import Home from "./components/utility/Home";
import Navi from "./components/utility/Navi";
import Cars from "./components/cars/Cars";
import Locations from "./components/locations/Locations";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getCars } from "./store/cars/actions";
import { getLocations } from "./store/locations/actions";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCars());
    this.props.dispatch(getLocations());
  }

  render() {
    return (
      <div className="App">
        <main>
          <Navi />
          <br />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cars" component={Cars} />
            <Route path="/locations" component={Locations} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default connect()(App);
