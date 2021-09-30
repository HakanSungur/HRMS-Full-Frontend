import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

// components
import AdminNavbar from "../components/Navbars/AdminNavbar.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import FooterAdmin from "../components/Footers/FooterAdmin";

// views
import EmployerList from "../views/admin/EmployerList";
import jobAdvertList from "../views/admin/JobAdvertList.jsx";
import jobseekerList from "../views/admin/JobSeekerList";
import systemPersonelList from "../views/admin/SystemPersonelList";
import AdminApproval from "../components/Cards/AdminApproval";

export default function Admin() {
    return (
        <>
            <Sidebar/>
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar/>
                {/* Header */}
                {/*<HeaderStats />*/}
                <div className="px-4 md:px-10 mx-auto w-full">
                    <Switch>
                        <Route path="/admin/systemPersonelList" exact component={systemPersonelList}/>
                        <Route path="/admin/jobseekerList" exact component={jobseekerList}/>
                        <Route path="/admin/employerList" exact component={EmployerList}/>
                        <Route path="/admin/jobAdvertList" exact component={jobAdvertList}/>
                        <Route path="/admin/approval" exact component={AdminApproval}/>
                        <Redirect from="/admin" to="/admin/employerList"/>
                    </Switch>
                    <FooterAdmin/>
                </div>
            </div>
        </>
    );
}