import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Index from "./views/Index";
import "tailwindcss/tailwind.css"
import Auth from "./layouts/Auth";

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/auth" component={Auth}/>
        <Route path="/" exact component={Index} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
