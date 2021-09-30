import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Index from "./views/Index";
import "tailwindcss/tailwind.css";
import Auth from "./layouts/Auth";
import Admin from "./layouts/Admin";
import JobSeekerProfile from "./views/JobSeeker/JobSeekerProfile";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={Index} />
        <Route path="/jobseeker/profile" exact component={JobSeekerProfile} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
