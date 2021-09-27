import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Navbar from "../components/Navbars/AuthNavbar.jsx";
import Register from "../views/auth/Register.jsx";



export default function Auth() {
    return (
        <>
            <Navbar transparent/>
            <main>
                <section className="relative w-full h-full py-40 min-h-screen">
                    <div
                        className="absolute top-0 w-full h-full bg-blueGray-200 bg-no-repeat bg-full"
                        style={{
                            backgroundImage:
                                "url(" + require("../assets/img/register_bg_2.png").default + ")",
                        }}
                    ></div>
                    <Switch>
                        //login gelecek
                        <Route path="/auth/register" exact component={Register}/>
                        
                    </Switch>
                    <FooterSmall absolute/>
                </section>
            </main>
        </>
    );
}