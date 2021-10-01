import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Index from "./views/Index";
import "tailwindcss/tailwind.css";
import Auth from "./layouts/Auth";
import Admin from "./layouts/Admin";
import JobSeekerProfile from "./views/JobSeeker/JobSeekerProfile";
import EmployerProfile from "./views/Employer/EmployerProfile";
import AddCv from "./views/JobSeeker/AddCv";
import Home from "./views/Home";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={Index} />
        <Route path="/jobseeker/profile" exact component={JobSeekerProfile} />
        <Route path="/employer/profile" exact component={EmployerProfile}/>
        <Route path="/jobseeker/addCv" exact component={AddCv}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/" exact component={Index}/>
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
