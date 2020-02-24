import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = props => (
  <Router>
    <div>
      <Route
        path="/:page/:subpage"
        render={({ match }) => {
          <h1>
            Page: {match.params.page} || 'Home' <br />
            Subpage: {match.params.subpage}
          </h1>;
        }}
      />
    </div>
  </Router>
);
