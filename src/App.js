import React from "react";
import "./App.css";
import Search from "./Pages/Search";

import Weather from "./Pages/Weather";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="Container">
      <Switch>
        <Route path="/" exact component={Weather} />
      </Switch>
      <Switch>
        <Route path="/search" exact component={Search} />
      </Switch>
    </div>
  );
}

export default App;
